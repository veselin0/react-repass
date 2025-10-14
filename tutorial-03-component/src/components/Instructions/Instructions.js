import React from "react";
import "./Instructions.css";
import logo from "./logo.svg";

const Instructions = () => (
		<div className="instructions">
			<img alt="laughing crying emoji" src={logo} />
			<p>Click on an emoji to view the emoji short name.</p>
		</div>
	);


export default Instructions;
