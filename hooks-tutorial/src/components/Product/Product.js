import { useState } from "react";
import "./Product.css";

const currencyOptions = {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
};


const products = [
	{
		emoji: "🍦",
		name: "soft ice cream",
		price: 5,
	},
	{
		emoji: "🍩",
		name: "doughnut",
		price: 2.5,
	},
	{
		emoji: "🍉",
		name: "watermelon",
		price: 4,
	},
];

export default function Product() {

	const [state, setState] = useState({ cart: [], total: 0 });

	function add(product) {
		setState((state) => ({
			cart: [...state.cart, product],
		}));
	}

	function remove(product) {
		setState((state) => {
			const cart = [...state.cart];
			const productIndex = cart.findIndex(() => product.name);
			// if (productIndex < 0) {
			// 	return;
			// }
			cart.splice(productIndex, 1);
			return {
				cart,
			};
		});
	};

	function getTotal() {
		const total = state.cart.reduce(
			(totalCost, item) => totalCost + item.price,
			0
		);
		return total.toLocaleString(undefined, currencyOptions);
	}

	return (
		<div className="wrapper">
			<div>Shopping Cart: {state.cart.length} total items</div>
			<div>Total Price: {getTotal(state.total)}</div>
			<div>
				{products.map((product) => (
					<div key={product.name}>
						<div className="product">
							<span
								role="img"
								aria-label={product.name}
								id={product.name}
							>
								{product.emoji}
							</span>
						</div>
						<button onClick={() => add(product)}>Add</button>
						<button onClick={() => remove(product)}>Remove</button>
					</div>
				))}
			</div>
		</div>
	);
}

//start on p.384
