import { useState } from "react";
import UserModal from "../molad";
import { NavLink } from "react-router-dom";

import "./cars.css";
import { nanoid } from "nanoid";

const Cars = () => {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [cars, setCars] = useState([
    {
      id: nanoid(),
      name: "BMW M4",
      price: "140.000",
      year: "22.05.2024",
      color: "Black",
      brand: "BMW",
    },
    {
      id: nanoid(),
      name: "BMW X5(G05) M50i",
      price: "75.000",
      year: "18.05.2024",
      color: "Black",
      brand: "BMW",
    },
    {
      id: nanoid(),
      name: "BMW M5 F90",
      price: "177.000",
      year: "25.05.2024",
      color: "Black",
      brand: "BMW",
    },
  ]);

  const deleteItem = (id) => {
    const newItem = cars.filter((item) => item.id != id);
    setCars([...newItem]);
  };
  return (
    <>
      <UserModal
        open={modal}
        toggle={() => setModal(false)}
        cars={cars}
        setCars={setCars}
      />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-10 offset-1">
            <div className="row">
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={() => setModal(true)}
                >
                  Add Uset
                </button>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search..."
                  name="search"
                  className="form form-control"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <td>T/R</td>
                <td>Name</td>
                <td>Price</td>
                <td>Year</td>
                <td>Color</td>
                <td>Brand</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cars
                ?.filter((item) => {
                  let name = item.name.toLowerCase();
                  let Search = search.toLowerCase();
                  if (name.includes(Search)) {
                    return item;
                  }
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.year}</td>
                    <td>{item.color}</td>
                    <td>{item.brand}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button type="button" className="btn btn-info">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteItem(item.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <NavLink to={`/single-car/${item.id}`}>
                          <button type="button" className="btn btn-primary">
                            <i className="fa-solid fa-circle-info"></i>
                          </button>
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cars;
