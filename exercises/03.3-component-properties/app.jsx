import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5 w-25">
			<img className="card-img-top" src={props.urlImg} />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
// 2) add here the new properties into the proptypes object
BootstrapCard.propTypes = {
	title: PropType.string,
	urlImg: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};
BootstrapCard.defaultProps = {
	title: "Bob Dylan",
	urlImg: "https://upload.wikimedia.org/wikipedia/commons/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
	description:
		"Robert Dylan[3] (born Robert Allen Zimmerman; May 24, 1941) is an American singer-songwriter. Often regarded as one of the greatest songwriters of all time,[4][5][6] Dylan has been a major figure in popular culture during a career spanning more than 60 years",
	buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
	buttonLabel: "Go to wikipedia",
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));
