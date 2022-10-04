import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
	if (props.show === true) {
		return null;
	} else {
		return (
			<div className="alert alert-danger" role="alert">
				{props.text}
			</div>
		);
	}
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert show={true} color="blue" text="This is a primary alert-check it out!" />
		<Alert show={false} color="yellow" text="This is a false alert-check it out!" />
	</div>,
	document.querySelector("#myDiv")
);
