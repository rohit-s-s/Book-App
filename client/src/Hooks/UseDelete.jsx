import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const ApiCall = async (id) => {
  await axios.delete(`http://localhost:3001/books/${id}`);
};

export const UseDelete = () => {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (id) => ApiCall(id),
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["books"],
      });
    },
  });
};
