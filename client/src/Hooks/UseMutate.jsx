import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ApiCall = async (formState) => {
    await axios.post(`http://localhost:3001/books`, formState);
    
  };
export const UseMutate = () =>{
    const navigate = useNavigate()

    return  useMutation({
    mutationFn: ({ formState}) => ApiCall(formState),
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.log("Error", error);
    },
  });
}

