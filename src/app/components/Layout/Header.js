import React from "react";
import mealsImage from "../../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<>
			<header className={classes.header} >
                <h1>Product List</h1>
               <HeaderCartButton onClick ={props.onShowCart}/>
            </header>
			<div className={classes['main-image']}>
                {/* <img src ={mealsImage} alt = "A table full of delicious meals" /> */}
            </div>
		</>
	);
};

export default Header;
