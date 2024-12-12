import { useEffect, useMemo, useRef, useState } from "react";
import useServerData from "../../hooks/useServerData";
import { Pagination, Table, Tabs, TabsRef } from "flowbite-react";
import { useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import Filters from "./Filters";
import ServerRowItem from "./ServerRowItem";


const ServerTable = () => {

  const { serverInfos } = useServerData();
  const [serversPage, setServersPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const tabsRef = useRef<TabsRef>(null);
  const router = useRouter();
  const maxPerPage = 4;

  useEffect(() => {
    if (router.isReady) {
      const tab = router.query.tab as string;
      if (tab === "Servers") {
        tabsRef.current?.setActiveTab(1);
      } else {
        tabsRef.current?.setActiveTab(0);
      }
    }
  }, [router.isReady, router.query.tab]);

  const handleTabChange = () => {

  };

  const filterProps = {
    showFilters,
    setShowFilters,
  };

  return (
    <div className="w-full">
      <Tabs style="fullWidth" onActiveTabChange={handleTabChange} ref={tabsRef}>
        <Tabs.Item title="Servers" active>
          <Filters {...filterProps} />
          <div className="overflow-x-auto">
            <Table className="overflow-x-auto">
              <Table.Head>
                <Table.HeadCell>Description</Table.HeadCell>
                <Table.HeadCell>URL</Table.HeadCell>
                <Table.HeadCell>Location</Table.HeadCell>
                <Table.HeadCell>Timelock</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>FEE</Table.HeadCell>
                <Table.HeadCell>Lightning</Table.HeadCell>
                <Table.HeadCell>On chain</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {serverInfos
                  .slice(
                    serversPage * maxPerPage - maxPerPage,
                    serversPage * maxPerPage
                  )
                  .map((server, idx) => (
                    <ServerRowItem server={server} key={idx} />
                  ))}
              </Table.Body>
            </Table>
          </div>
          <div className="flex justify-center">
            {serverInfos.length / maxPerPage > 1 && (
              <Pagination
                currentPage={serversPage}
                onPageChange={(page) => setServersPage(page)}
                totalPages={Math.ceil(serverInfos.length / maxPerPage)}
              />
            )}
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default ServerTable;

