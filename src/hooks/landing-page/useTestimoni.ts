import { baseUrl, homeUrl } from "@/lib/constants";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

const useGetTestimoni = async () => {
  const { data } = await axios.get(homeUrl + "testimony");
  return data;
};

export { useGetTestimoni };
