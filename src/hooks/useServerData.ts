import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import NDK, { NDKEvent, NDKFilter } from "@nostr-dev-kit/ndk";
import { RootState, useAppDispatch } from "@/redux/store";
import {
  addMercuryServer
} from "@/redux/slices/nip87Slice";
import {
  Nip87Kinds,
} from "@/types";
import { useNdk } from "@/hooks/useNdk";

const useServerData = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { ndk } = useNdk();

  const { servers: unfilteredServerInfos } =
    useSelector((state: RootState) => state.nip87);
    
  // Parse filters from URL
  const filters = useMemo(() => {
    const showLightning = router.query.showLightning === "true";
    const showOnchain = router.query.showOnchain === "true";
    const showStatus = router.query.showStatus === "true";

    return {
      //fee: parseFloat(router.query.fee as string) || 0,
      showOnchain,
      showLightning,
      showStatus,
    };
  }, [router.query]);


  const serverInfos = useMemo(() => {
    return unfilteredServerInfos.filter((server) => {

      if(!filters.showLightning){
        return false;
      }

      if(filters.showOnchain){
        return false;
      }

      if(!filters.showStatus){
        return false;
      }

      return true;
    });
  }, [unfilteredServerInfos, filters]);

  // Fetch data
  useEffect(() => {
    if (!ndk || !router.isReady) return;

    const serverInfoFilter: NDKFilter = {
      kinds: [Nip87Kinds.MERCURY_SERVER_KIND],
    } as unknown as NDKFilter;

    console.log('serverInfoFilter', serverInfoFilter);

    const serverSub = ndk.subscribe(serverInfoFilter, { closeOnEose: false });

    serverSub.on("event", async (event: NDKEvent) => {
      if(event.kind === Nip87Kinds.MERCURY_SERVER_KIND) {
        console.log('Mercury Server Kind found', event);
        // Add only if event is less than 24 hours old
        if (isEventWithin24Hours(event.rawEvent().created_at)) {
          dispatch(
            addMercuryServer({
              event: event.rawEvent(),
              content: event.content,
              tags: event.tags,
            })
          );
        }
      }
    });
  }, [ndk, router.isReady, dispatch]);

  const isEventWithin24Hours = (eventTimestamp: number): boolean => {
    return eventTimestamp >= Date.now() - 24 * 60 * 60 * 1000;
  };


  const updateFilters = (newFilters: Partial<typeof filters>) => {
    const updatedQuery: Partial<{
      showLightning: string,
      showOnchain: string,
      showStatus: string,
      //fee: string,
      //units: string
    }> = { ...router.query };

    (Object.keys(newFilters) as Array<keyof typeof filters>).forEach((key) => {
      const value = newFilters[key];
      if (value !== undefined) {
        if (typeof value === "boolean") {
          updatedQuery[key] = value.toString();
        //} else if (typeof value === "number") {
        //  updatedQuery[key] = value.toString();
        } else if (typeof value === "string") {
          updatedQuery[key] = value;
        }
      }
    });

    router.push({ pathname: router.pathname, query: updatedQuery }, undefined, {
      shallow: true,
    });
  };

  return {
    serverInfos,
    filters,
    updateFilters
  };
}

export default useServerData;
