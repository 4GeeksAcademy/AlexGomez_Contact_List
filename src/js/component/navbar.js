import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [selectedValue, setSelectedValue] = useState("salazar");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    actions.user(selectedValue);
  }, [selectedValue]);

  return (
    <nav className="navbar navbar-light mb-3  container d-flex justify-content-between">
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
      <div className="ml-auto">
        <Link to="/signup" type="add">
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>
    </nav>
  );
};
