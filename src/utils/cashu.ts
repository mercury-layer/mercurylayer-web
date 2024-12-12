import { V0NutData, V1NutData } from "@/types";

const timeout = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Request timed out after ${ms} ms`));
    }, ms);
  });
};

const fetchWithTimeout = async (
  url: string,
  options: RequestInit,
  timeoutMs: number
) => {
  return Promise.race([
    fetch(url, options),
    timeout(timeoutMs),
  ]) as Promise<Response>;
};
