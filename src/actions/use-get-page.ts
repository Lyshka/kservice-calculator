import { newAxios } from "../utils/newAxios";
import { Cars } from "../types/Cars";

export const UsegetPage = async (id: number) => {
  const { data } = await newAxios.get<Cars>(`/cars/${id}`);
  return { data };
};
