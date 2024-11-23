import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [selectedValue, setSelectedValue] = useState("salazar");
  const [newUser, setNewUser] = useState({ name: "" });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAddUser = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    actions.addUserFetch(newUser);
    setShowModal(false);  
    setNewUser({ name: "" }); 
  };

  useEffect(() => {
    actions.user(selectedValue);
  }, [selectedValue]);

  return (
    <>
      {showModal && (
        <div className="modal show " tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New User</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={newUser.name}  
                      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className="navbar navbar-light mb-3 container d-flex justify-content-between">
        <div>
          <Link to="/">
            <span className="navbar-brand mb-0 h1">
              <select value={selectedValue} onChange={handleChange}>
                <option className="text-center" value="salazar">
                  Select an option
                </option>
                {store.users.map((option, index) => (
                  <option key={index} value={option.slug}>
                    {option.slug}
                  </option>
                ))}
              </select>
            </span>
          </Link>
        </div>
        <div className=" ml-lg-auto">
          <Link to={`/signup/${selectedValue}`}>
            <button className="btn btn-success btn-sm btn-lg me-2  ">Add new contact</button>
          </Link>
          <button className="btn btn-primary btn-sm btn-lg  " onClick={handleAddUser}>
            Add new user
          </button>
        </div>
      </nav>
    </>
  );
};
