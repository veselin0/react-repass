import React from "react";
import "./AnimalCard.css";

export default function AnimalCard({
	additional,
	diet,
	name,
	scientificName,
	showAdditionalData,
	size,
}) {
	// const { name } = props;
	return (
		<div className="animal-wrapper">
			<h2>{name}</h2>
			<h3>{scientificName}</h3>
			<h4>{size}kg</h4>
			<div>{diet.join(", ")}.</div>
			<button onClick={()=>showAdditionalData(additional)}>More information</button>
		</div>
	);
}
