import {
  ServerData,
  Nip87Kinds,
} from "@/types";
import { NostrEvent } from "@nostr-dev-kit/ndk";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Nip87State {
  loading: boolean;
  error?: null | string;
  servers: ServerData[];
}

const initialState: Nip87State = {
  loading: false,
  error: null,
  servers: []
};

const nip87Slice = createSlice({
  name: "nip87",
  initialState: initialState,
  reducers: {
    addMercuryServer(state, action: { payload: { event: NostrEvent, content: string, tags: string[][] } }) {
      // Create a mapping object from the tags array
      const tagsMap = action.payload.tags.reduce((acc, tag) => {
        if (tag.length >= 2) {
          acc[tag[0]] = tag.slice(1); // Use the rest of the array values for flexibility
        }
        return acc;
      }, {} as Record<string, string[]>);
    
      // Extract the URL from the tags map
      const url = tagsMap['url']?.[0];
    
      // If the 'url' value is not found or the same server URL already exists, return early
      if (!url || state.servers.find(s => s.url === url)) return;
    
      // Add the new server
      state.servers = [...state.servers, {
        url: url,
        content: action.payload.content,
        location: tagsMap['location']?.[0] || '',
        timelock: tagsMap['timelock']?.[0] || '',
        status: tagsMap['status']?.[0] || '',
        fee: tagsMap['fee'] || [] // Keep fee as an array
      }];
    },
  },
});

export default nip87Slice.reducer;
export const { addMercuryServer } =
  nip87Slice.actions;
