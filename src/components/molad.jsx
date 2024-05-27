import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { nanoid } from "nanoid";

const UserModal = (props) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = nanoid();
    const { cars, setCars } = props;
    cars.push({ ...form, id });
    setCars([...cars]);
    props.toggle();
  };

  return (
    <Modal isOpen={props.open} toggle={props.toggle} form={setForm}>
      <ModalHeader>
        <div>
          <h1>Add User</h1>
        </div>
      </ModalHeader>
      <ModalBody>
        <div>
          <form id="submit" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Name"
              name="name"
              className="form-control mt-2"
              required
            />
            <input
              onChange={handleChange}
              type="number"
              placeholder="Price"
              name="price"
              className="form-control mt-2"
              required
            />
            <input
              onChange={handleChange}
              type="date"
              placeholder="Year"
              name="year"
              className="form-control mt-2"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Color"
              name="color"
              className="form-control mt-2"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Brand"
              name="brand"
              className="form-control mt-2"
              required
            />
          </form>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="d-flex gap-2">
          <button className="btn btn-danger" onClick={props.toggle}>
            Cancel
          </button>
          <button form="submit" type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
