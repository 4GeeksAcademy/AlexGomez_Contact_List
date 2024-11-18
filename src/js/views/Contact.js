import React from "react";

import "../../styles/Contact.css";
import { Card }  from "../component/Card.jsx";
import { Navbar } from "../component/navbar.js";

export const Contact = () => (
	<>
	<Navbar />
	 < div className="container">
			<Card />
	</div>
	
	</>
   
//  <div className="text-center mt-5">
//  <h1>Hello Rigo!</h1>
//  <p>
//    <img src={rigoImage} />
//  </p>
//     <a href="#" className="btn btn-success">
//       If you see this green button, bootstrap is working
//     </a>
//   </div>
);
