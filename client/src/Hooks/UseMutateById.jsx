import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ApiCall = async (formState,id,method) => {
  try {
    await axios({
      method: method,
      url: `http://localhost:3001/books/${id}`,
      data: formState,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UseMutateById = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ formState, id }) => ApiCall(formState, id,"put"),
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });
};
