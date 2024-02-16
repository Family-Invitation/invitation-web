import { baseUrl, homeUrl } from "@/lib/constants";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

const useGetCouple = async () => {
  const { data } = await axios.get(homeUrl + "couples");
  return data;
};

export { useGetCouple };
