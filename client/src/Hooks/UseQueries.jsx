import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const UseQuries = ()=>{
    return useQuery({
        queryKey: ["books"],
        queryFn: async () => {
          const response = await axios("http://localhost:3001/books");
          return response.data;
        },
        refetchOnWindowFocus: false,
      });
}