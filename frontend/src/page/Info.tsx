import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import useFetch from "../Hooks/useFetch";

const Info = () => {
  const { id } = useParams();
  const { data, isSuccess, isError, error } = useFetch(id);
  if (isSuccess) {
    return (
      <>
        <Navbar Title="Book information" />
        <ul>
          <li>{data.title}</li>
          <li>{data.author}</li>
          <li>{data.publishYear}</li>
        </ul>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <Navbar Title="Book information" />
        <div>{error.message}</div>
      </>
    );
  }
  return (
    <>
      <Navbar Title="Book information" />
    </>
  );
};

export default Info;
