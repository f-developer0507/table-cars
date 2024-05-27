import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Cars from "./components/cars/cars";
import SingleCar from "./components/single-car/single-car";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="cars" element={<Cars />} />
        <Route path="single-car/:id" element={<SingleCar />} />
      </Routes>
    </>
  );
};

export default App;
