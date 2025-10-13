import { Component } from "react";
import logo from './logo.svg';

export default class Instructions extends Component {
	render() {
		return (
			<div className="instructions">
				<img alt="laughing crying emoji" src={logo} />
				<p>Click on an emoji to view the emoji short name.</p>
			</div>
		);
	}
}
