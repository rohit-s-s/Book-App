import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
const ApiCall = async (id) => {
  const response = await axios(`http://localhost:3001/books/${id}`);
  return response.data;
};

export const useQueryById = (id) => {
  return useQuery({
    queryKey: ["book", id],
    queryFn: () => ApiCall(id),
  });
};
