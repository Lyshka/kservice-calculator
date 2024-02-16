import { useEffect, useState } from "react";

import { newAxios } from "../utils/newAxios";
import { Cars } from "../types/Cars";

export const UsegetPages = (parent = 0) => {
  const [data, setData] = useState<Cars[]>([]);

  useEffect(() => {
    const getPages = async () => {
      const { data } = await newAxios.get<Cars[]>(
        `/cars?per_page=100&parent=${parent}`
      );

      setData(data);
    };
    getPages();
  }, [parent]);

  return { data };
};
