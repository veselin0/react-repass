import React, { Component } from "react";
import "./Product.css";

const emoji = {
	emoji: "🍦",
	name: "soft ice cream",
};

export default class Product extends Component {
	state = {
		cart: [],
		total: 0,
	};

	currencyOptions = {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	};

	getTotal = () => {
		return this.state.total.toLocaleString(undefined, this.currencyOptions);
	};
	render() {
		return (
			<div className="wrapper">
				<div>ShoppingCart: {this.state.cart.length}</div>
				<div>Total: {this.getTotal()}</div>

				<div className="product">
					<span role="img" aria-label={emoji.name} id={emoji.name}>
						{emoji.emoji}
					</span>
				</div>
				<button>Add</button>
				<button>Remove</button>
			</div>
		);
	}
}
