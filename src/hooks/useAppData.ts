import { useQuery } from "@tanstack/react-query";
import {type AppData } from "../types/data/data";



async function fetchData(): Promise<AppData> {
    const res = await fetch("/data.json");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export function useAppData() {
  return useQuery<AppData>({
    queryKey: ["appData"],
    queryFn: fetchData,
    staleTime: 15 * 60 * 1000,
  });
}