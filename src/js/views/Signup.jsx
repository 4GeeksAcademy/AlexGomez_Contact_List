import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert } from "../component/alert.jsx";

export const Signup = () => {
  const { name, id } = useParams();
  const [showAlert, setShowAlert] = useState(false);

  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      actions.editContact(
        name,
        id,
        formData.name,
        formData.email,
        formData.phone,
        formData.address
      );
      navigate("/");
      return;
    }
    setShowAlert(true);
    actions.addContact(
      formData.name,
      formData.email,
      formData.phone,
      formData.address
    );
     

  };

  return (
    <div className="container mt-5">
      {showAlert && (
        <Alert
          danger={"#check-circle-fill"}
          message={
            !name
              ? "Contact added successfully"
              : `Contact ${name} update successfully!`
          }
        />
      )}
      <h2 className="text-center">
        {!name ? "Add a new contact" : `Update to ${name}!`}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary container-fluid">
          Save
        </button>
      </form>
      <Link to="/">or get back to contacts</Link>
    </div>
  );
};
