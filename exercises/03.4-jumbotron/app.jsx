import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Jumbotron = (props) => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.buttonUrl} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};
Jumbotron.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};
Jumbotron.defaultProps = {
	title: "Welcome to react",
	description: "React is the most popular rendering library in the world",
	buttonUrl: "https://reactjs.org/",
	buttonLabel: "Go to the official website",
};

ReactDOM.render(<Jumbotron />, document.querySelector("#myDiv"));
