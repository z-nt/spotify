import React from "react";  
import "./components.css";



export function PlusButton({onClick}) {
	return (
		<button className="plusButton" onClick={onClick} >
		 <i className="fa fa-plus"></i>
		</button>
	)
};
