import React from "react";
import propType from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./footer.js";
import NavBar from "./nav.js";
import Jumbo from "./jumbotron.js";
import Card from "./card.js";

//create your first component
export function Home() {
	const menu = [
		{ label: "Home ", url: "/", class: "nav-link active" },
		{ label: "About ", url: "#", class: "nav-link" },
		{ label: "Services ", url: "/", class: "nav-link" },
		{ label: "Contact ", url: "#", class: "nav-link" }
	];
	return (
		<div>
			<div>
				<NavBar menu={menu} brand="Start BootStrap" />
			</div>

			<div className="mt-5">
				<Jumbo name="Hello" />
			</div>
			<div>
				<Card />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
