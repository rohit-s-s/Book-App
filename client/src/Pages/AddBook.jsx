import { UseMutate } from "../Hooks/UseMutate";
import { useState } from "react";
import { handleChange, handleSubmit } from "../Components/Util";
import Header from "../Components/Header";
import FormElement from "../Components/FormElement";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {
  const navigate = useNavigate()
  const { mutate,isError,error} = UseMutate()
  const [formState, setFormState] = useState({
    title: "",
    author: "",
    publishYear: "",
  });

  if(isError){
    setTimeout(()=>{
      navigate("/");
    },2000)
      return <h1>{error.message}</h1>;
    }


  return (
    <>
     <Header Title={"Add Book details"}/>
     <FormElement handleSubmit={(event)=>handleSubmit(event,formState,mutate)} handleChange={(event)=>handleChange(event,formState,setFormState)} title={formState.title} author={formState.author} publishYear={formState.publishYear}/>
    </>
  );
};
