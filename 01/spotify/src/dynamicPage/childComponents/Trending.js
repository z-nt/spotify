
import React from "react";
import "./style.css";
import Slidercard from "./component.js";


function TrendingSongs () {
	return (
		<>
			<div className= "trendingContainer">
				<div className= "header" >
					<h1>Trending Songs</h1>
					<button className="show" >
					  Show All
					</button>	
				</div>		
				<div  className="slider">
					<Slidercard/>			
				</div>

			</div>
			

		</>
	)
}


export default TrendingSongs;
