
import React from "react";
import "../assets/styles/style.css";
import Slidercard from "./dpComponent.js";
import {HorizontallScroll} from "./dpCard_Co.js";

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
					<HorizontallScroll>
					   <Slidercard/>	
					</HorizontallScroll>
				</div>

			</div>
			

		</>
	)
}


export default TrendingSongs;
