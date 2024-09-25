import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Value } from "../types/util";

type Update = {
  param?: string;
  method: "post" | "put" | "delete";
};

const useUpdate = ({ param, method }: Update) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const Api = () => {
    const ApiMethods = {
      post: async (newData: Value) => {
        await axios.post("http://localhost:5000/books", newData);
      },
      put: async (newData: Value) => {
        await axios.put(`http://localhost:5000/books/${param}`, newData);
      },
      delete: async (userData: Value) => {
        await axios.delete(`http://localhost:5000/books/${userData._id}`);
      },
    };
    return ApiMethods[method];
  };

  return useMutation({
    mutationFn: Api(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["api"] });
      navigate("/");
    },
  });
};

export default useUpdate;
