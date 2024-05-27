import { useParams } from "react-router-dom";
const SingleCar = () => {
  const {id} = useParams()
  return (
    <>
      <h1>Single Card id:{id}</h1>
    </>
  );
};

export default SingleCar;
