import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import "./styles/logo1.css";

const Logo1 = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={INFO.main.logo1} alt="logo1" className="logo1" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo1;
