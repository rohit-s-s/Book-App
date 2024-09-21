import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import { useQueryById } from "../Hooks/UseQueryById";

const BookInfo = () => {
  const { id } = useParams();
  const { data, isLoading, isError,error } = useQueryById(id)
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }
  
  return (
    <>
    <Header Title={"Book information"}/>
      <section>
        <ul>
          <li>id: {data._id}</li>
          <li>Title: {data.title}</li>
          <li>Author : {data.author}</li>
          <li>Created At : {data.createdAt}</li>
          <li>Published Year: {data.publishYear}</li>
          <li>Updated At: {data.updatedAt}</li>
        </ul>
      </section>
    </>
  );
};

export default BookInfo;
