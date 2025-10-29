import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
	render() {
		return (
			<div className="wrapper">
				<div>ShoppingCart: 0 total items</div>
				<div>Total: 0</div>

				<div
					className="product"
					role="img"
					aria-label="soft icecream"
					id="soft icecream"
				>
					🍦
					<span />
				</div>
                <button>Add</button>
                <button>Remove</button>
			</div>
		);
	}
}
