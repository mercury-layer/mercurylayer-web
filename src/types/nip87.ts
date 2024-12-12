import { NDKUserProfile, NostrEvent } from "@nostr-dev-kit/ndk";

export enum Nip87Kinds {
  MERCURY_SERVER_KIND = 39101,
}

export type Nip87ServerInfo = {
  url: string;
  content: string;
  location: string;
  timelock: string;
  status: string;
  fee: string[];
};
