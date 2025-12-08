import { useReducer } from "react";
import "./Product.css";

const currencyOptions = {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
};

function getTotal(total) {
	return total.toLocaleString(undefined, currencyOptions);
}

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

function cartReducer(state, product) {
	return [...state, product];
}

function totalReducer(state, action) {
	if (action.type === "add") return state + action.price;
	return state - action.price;
}

export default function Product() {
	const [cart, setCart] = useReducer(cartReducer, []);
	const [total, setTotal] = useReducer(totalReducer, 0);

	function add(product) {
		const { name, price} = product;
		setCart(name);
		setTotal({price, type: "add"});
	}

	function remove(product) {
		setCart({ product, type: "remove" });
	}

	return (
		<div className="wrapper">
			<div>Shopping Cart: {cart.length} total items</div>
			<div>Total Price: {getTotal(total)}</div>
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
						<button>Remove</button>
					</div>
				))}
			</div>
		</div>
	);
}

//start on p.384
