export type V0NutData = string[];
export type V1NutData = { [key: string]: { supported?: boolean } };

export type ServerData = {
  url: string;
  content: string;
  location: string;
  timelock: string;
  status: string;
  fee: string[];
}

