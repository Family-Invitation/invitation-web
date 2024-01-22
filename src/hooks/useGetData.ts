// src/hooks/useGetData.ts
import { useState, useEffect } from "react";
import { Data } from "@/interfaces/dataInterfaces";

const useGetData = (): Data => {
  const [data, setData] = useState<Data>({} as Data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json"); // Lokasi file di dalam folder 'public'
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useGetData;
