import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./ProductItem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(async () => {
		const response = await fetch(
			`http://127.0.0.1:5000/products?_page=${page}&_limit=6`
		);
		const data = await response.json();
		setProducts(data);
	}, []);

	const loadMoreProducts = async () => {
		const response = await fetch(
			`http://127.0.0.1:5000/products?_page=${page + 1}&_limit=6`
		);
		const data = await response.json();
		setProducts((prevData) => {
			return [...prevData, ...data];
		});
		setPage(page + 1);
	};
	const mealsList = products.map((product) => {
		return (
			<MealItem
				id={product.id}
				key={product.id}
				name={product.title}
				description={product.description}
				price={product.price}
				image={product?.images[0]}
			/>
		);
	});

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
				<button className={classes.loadMore} onClick={loadMoreProducts} >Load More</button>
			</Card>
		</section>
	);
};

export default AvailableMeals;
