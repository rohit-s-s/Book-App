import Form from "../components/Form";
import useUpdate from "../Hooks/useUpdate";
import Navbar from "../components/Navbar";

const Add = () => {
  const { mutate } = useUpdate({ method: "post" });

  return (
    <>
      <Navbar Title="Add Books" />
      <Form mutate={mutate} />
    </>
  );
};

export default Add;
