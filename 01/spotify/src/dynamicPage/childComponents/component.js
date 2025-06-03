import React from "react";
import CardContainer from "./card.js";
import TrendCard from "./data.js";


export default  function SliderCard (){
	return (
		<>
			<div className = 'container'>
				<CardContainer cards={TrendCard} /> 
			</div> 
				
		</>

	) 
} 







