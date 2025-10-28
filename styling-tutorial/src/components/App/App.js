import Alert from "../Alert/Alert";
import "./App.css";
import CartSuccess from "../CartSuccess/CartSuccess";

function App() {
	return (
		<div className="wrapper">
			<Alert title="Items not Added" type="error">
				<div>Your items are out of stock.</div>
			</Alert>
      <CartSuccess></CartSuccess>
		</div>
	);
}

export default App;
