import { Contact } from "../views/Contact";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      Contact: [],
      user: "salazar",
      users: [],
      pictures: [],
    },
    actions: {
      user: (name) => {
        setStore({ user: name });
        getActions().dataContact();
      },
      pictures: async () => {
        const store = getStore();
        const apiKey = "n16DqNyucrUELcgk_-IExly9FqBfKfvtplRgXNqE-dg";
        const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=people&count=30`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          await data.forEach((image) => {
            setStore({ pictures: [...store.pictures, image.urls.full] });
          });
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      },
      
      addUserFetch: (newUser) => {
        console.log(newUser.name);
        
        try {
          fetch(`https://playground.4geeks.com/contact/agendas/${newUser.name}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((result) => {
              console.log("Success:", result);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      },
      loadOptions: async () => {
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/"
          );
          const data = await response.json();

          if (data.agendas.length === 0) {
            actions.addUserFetch();
          }
          setStore({ users: data.agendas });
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      },
      dataContact: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${store.user}`
          );
          const result = await response.json();
          setStore({ Contact: [] });
          setStore({ Contact: [result] });
        } catch (error) {
          console.error("Error fetching contact data:", error);
        }
      },

      addContact: (name, email, phone, address) => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/salazar/contacts",
          {
            method: "POST",
            body: JSON.stringify({
              name: name,
              email: email,
              phone: phone,
              address: address,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            getActions().dataContact();
          })
          .catch((error) => console.log("error", error));
      },
      deleteContact: (id) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/salazar/contacts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((response) => response.json())
          .then((result) => {
            getActions().dataContact();
          })
          .catch((error) => console.log("error", error));
      },
      editContact: (name, id, newName, newEmail, newPhone, newAddress) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/${name}/contacts/${id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              name: newName,
              email: newEmail,
              phone: newPhone,
              address: newAddress,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            getActions().dataContact();
          })
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
