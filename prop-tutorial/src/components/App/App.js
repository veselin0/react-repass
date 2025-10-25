import React from "react";
import data from "./data";
import AnimalCard from "../AnimalCard/AnimalCard";
import "./App.css";

function showAdditionalData(additional) {
	const alertInformation = Object.entries(additional)
		.map((information) => `${information[0]}: ${information[1]}`)
		.join("\n");
	alert(alertInformation);
}

function App() {
	return (
		<div className="wrapper">
			<h1>Animals</h1>
			{data.map((animal) => (
				<AnimalCard
					key={animal.name}
					name={animal.name}
					additional={animal.additional}
					diet={animal.diet}
					scientificName={animal.scientificName}
					showAdditionalData={showAdditionalData}
					size={animal.size}
				/>
			))}
		</div>
	);
}

export default App;
