import { PostWishParams, WishMessage } from "@/interfaces/dataInterfaces";
import { baseUrl } from "@/lib/constants";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

// Custom hook untuk melakukan operasi GET ke API
const useGetWish = async (qty: number, lastId?: number) => {
  const { data } = await axios.get(baseUrl + "wish/244315", {
    params: {
      qty,
      lastId,
    },
  });
  return data;
};

// Custom hook untuk melakukan operasi POST ke API
const usePostWish = () => {
  return useMutation(async (params: PostWishParams) => {
    const response = await axios.post(baseUrl + "wish", params);
    return response.data;
  });
};

export { useGetWish, usePostWish };
