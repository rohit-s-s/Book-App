import DataTable from "../Components/DataTable";
import Header from "../Components/Header";
import { UseDelete } from "../Hooks/UseDelete";
import { UseQuries } from "../Hooks/UseQueries";

export const Home = () => {
  const { data, isLoading, isError,error } = UseQuries()
  const {mutate} = UseDelete()

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }
  // if(isSuccess){
  //   alert("Book deleted")
  // }
  return (
    <>
    <Header Title={"Book Project"} destination={"/books/add"} btn={"Add Books"}/>
    <DataTable mutate={mutate} data={data}/>
    </>
  );
};
