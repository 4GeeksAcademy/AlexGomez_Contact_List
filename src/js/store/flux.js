import { Contact } from "../views/Contact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Contact: [],


		},
		actions: {
			dataContact: async () => {
				const store = getStore();
				try {
					const response = await fetch(
						"https://playground.4geeks.com/contact/agendas/salazar"
					);
					const result = await response.json();
					setStore({ Contact: [] });
					setStore({ Contact: [result] });

				} catch (error) {
					console.error("Error fetching contact data:", error);
				}
			},

			addContact: (name, email, phone, address) => {
				fetch("https://playground.4geeks.com/contact/agendas/salazar/contacts", {
					method: "POST",
					body: JSON.stringify({
						name: name,
						email: email,
						phone: phone,
						address: address
					}),
					headers: {
						"Content-Type": "application/json",
					},
				})
					.then((response) => response.json())
					.then((result) => {
						getActions().dataContact();
					})
					.catch((error) => console.log("error", error));
			},
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/salazar/contacts/${id}`, {
					method: "DELETE",
				})
					.then((response) => response.json())
					.then((result) => {
						getActions().dataContact();
					})
					.catch((error) => console.log("error", error));
			},
			editContact: (name, id, newName, newEmail, newPhone, newAddress) => {
				fetch(`https://playground.4geeks.com/contact/agendas/${name}/contacts/${id}`, {
					method: "PUT",
					body: JSON.stringify({
						name: newName,
						email: newEmail,
						phone: newPhone,
						address: newAddress
					}),
					headers: {
						"Content-Type": "application/json",
					},
				})
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
