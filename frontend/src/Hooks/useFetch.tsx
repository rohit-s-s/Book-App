import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = (param?: string) => {
  return useQuery({
    queryKey: param ? ["api", param] : ["api"],
    queryFn: async () => {
      try {
        const url = param
          ? `http://localhost:5000/books/${param}`
          : "http://localhost:5000/books";
        const response = await axios(url);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnWindowFocus: false,
  });
};

export default useFetch;
