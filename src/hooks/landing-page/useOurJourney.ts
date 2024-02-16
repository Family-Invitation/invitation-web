import { baseUrl, homeUrl } from "@/lib/constants";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

const useGetOurJourney = async () => {
  const { data } = await axios.get(homeUrl + "our-journey");
  return data;
};

export { useGetOurJourney };
