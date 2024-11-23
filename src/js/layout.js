import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import  {Signup}  from "./views/Signup.jsx";
import injectContext from "./store/appContext";
import { Contact } from "./views/Contact.js";

const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div className="mt-3">
			<BrowserRouter basename={basename}>
				<ScrollToTop>	
					<Routes>
						<Route path="/" element={<Contact/>} />
						<Route path="/home" element={<Contact/>} />
						<Route path="/signup/:name" element={<Signup />} />
						<Route path="/update/:name/:id" element={<Signup />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
