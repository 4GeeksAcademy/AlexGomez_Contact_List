import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/Card.jsx";
import { Navbar } from "../component/navbar.js";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  let contact = store.Contact[0];
  let slug = contact ? contact.slug : null;

  contact = contact ? contact.contacts : null;
  useEffect(() => {
    if (!contact || contact.length === 0) {
      actions.dataContact();
    }
  }, [contact]);

  return (
    <>
      <Navbar />

      <div className="container">
        {contact ? (
          contact.map((contact, index) => {
            return (
              <Card key={index} prop={contact} slug={slug ? slug : "salazar"} />
            );
          })
        ) : (
          <p>No contacts found</p>
        )}
      </div>
    </>
  );
};
