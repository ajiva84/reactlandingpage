import React from "react";
import propType from "prop-types";

const Card = props => {
	const mySuperStyles = {
		marginBottom: "20px",
		marginLeft: "30px",
		marginRight: "30px"
	};
	const buttonalignment = {
		display: "flex",
		justifyContent: "center"
	};

	return (
		<div style={mySuperStyles} className="card-deck">
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/150"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div className="card-footer">
					<button
						className="btn btn-primary btn-sm mx-auto"
						style={buttonalignment}
						href="#"
						role="button">
						Find out More!
					</button>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/150"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div className="card-footer">
					<button
						className="btn btn-primary btn-sm mx-auto"
						style={buttonalignment}
						href="#"
						role="button">
						Find out More!
					</button>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/150"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div className="card-footer">
					<button
						className="btn btn-primary btn-sm mx-auto"
						style={buttonalignment}
						href="#"
						role="button">
						Find out More!
					</button>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://via.placeholder.com/150"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text text-center">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>

				<div className="card-footer">
					<button
						className="btn btn-primary btn-sm mx-auto"
						style={buttonalignment}
						href="#"
						role="button">
						Find out More!
					</button>
				</div>
			</div>
		</div>
	);
};

Card.proptypes = {
	name: propType.string
};

export default Card;
