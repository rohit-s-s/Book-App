import {  useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Components/Header";
import FormElement from "../Components/FormElement";
import { handleChange, handleSubmitById } from "../Components/Util";
import { useQueryById } from "../Hooks/UseQueryById";
import { UseMutateById } from "../Hooks/UseMutateById";

const EditBook = () => {
  const { id } = useParams();

  const [formState, setFormState] = useState({
    title: "",
    author: "",
    publishYear: "",
  });

  const { data, isLoading:quering, isError, error } = useQueryById(id)

  useEffect(() => {
    setFormState({
      title: data?.title || "",
      author: data?.author || "",
      publishYear: data?.publishYear || "",
    });
  }, [data]);

  const { mutate,isLoading:mutating } = UseMutateById()

  if (quering || mutating) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <>
      <Header Title={"Edit Book details"}/>
      <FormElement handleSubmit={(event)=>handleSubmitById(event,formState,id,mutate)} handleChange={(event)=>handleChange(event,formState,setFormState)} title={formState.title} author={formState.author} publishYear={formState.publishYear}/>
    </>
  );
};

export default EditBook;
