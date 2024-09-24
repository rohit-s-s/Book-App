import useFetch from "../Hooks/useFetch";
import Navbar from "../components/Navbar";
import SimpleTable from "../components/SimpleTable";

const Home = () => {
  const {data, isSuccess, isError,error,isLoading} = useFetch();
  

  if (isSuccess) {
    
    return (
      <>
      <Navbar Title="Book info" action="Add books" destination="/form"/>
      <SimpleTable data={data}/>
      </>
    );
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
};

export default Home;
