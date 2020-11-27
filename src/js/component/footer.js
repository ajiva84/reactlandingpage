import React from "react";
import propType from "prop-types";

const Footer = props => {
	return (
		<div>
			<footer className="text-muted bg-dark">
				<div className="container text-center text-light card-body">
					<p>Copyright your website © 2020</p>
				</div>
			</footer>
		</div>
	);
};

Footer.proptypes = {
	name: propType.string
};

export default Footer;
