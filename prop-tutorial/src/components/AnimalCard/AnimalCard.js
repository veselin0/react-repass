import React from "react";
// import "./AnimalCard.scc ";

export default function AnimalCard({
	additional,
	diet,
	name,
	scientificName,
	size,
}) {
	// const { name } = props;
	return (
		<div>
			<h2>{name}</h2>
			<h3>{scientificName}</h3>
			<h4>{size}kg</h4>
			<div>{diet.join(", ")}.</div>
		</div>
	);
}
