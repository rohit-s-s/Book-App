import { useParams } from "react-router-dom";
import Form from "../components/Form";
import useUpdate from "../Hooks/useUpdate";
import Navbar from "../components/Navbar";
import useFetch from "../Hooks/useFetch";

const Edit = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading, isError, error } = useFetch(id);

  const { mutate } = useUpdate({ method: "put", param: id });
  if (isSuccess) {
    return (
      <>
        <Navbar Title="Edit Boooks" />
        <Form data={data} mutate={mutate} />
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <Navbar Title="Edit Boooks" />
        <h3>Loading....</h3>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <Navbar Title="Edit Boooks" />
        <h3>{error.message}</h3>
      </>
    );
  }
  return <h3>Error</h3>;
};

export default Edit;
