import { urlWish } from "@/lib/constants";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

// Custom hook untuk melakukan operasi GET ke API
const useGetWish = () => {
  return useQuery("getWish", async () => {
    const { data } = await axios.get(urlWish + "wish/1");
    return data;
  });
};

// Custom hook untuk melakukan operasi POST ke API
const usePostWish = () => {
  return useMutation(async (data) => {
    const response = await axios.post("https://example.com/api/post", data);
    return response.data;
  });
};

export { useGetWish, usePostWish };
