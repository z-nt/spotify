import React from "react";
import "../assets/styles/artistStyle.css";
import Slidercard from "./dpComponent.js";
import {HorizontallScroll} from "./dpCard_Co.js";


function PopularArtist (){
	return (
		<>
		<div className="popularArtistContainer">
			<div className="header">
				<h1>PoPular artist</h1>
				<button className="show">
			  	  Show All
				</button>
			</div>
			<div className="slider">
			  <HorizontallScroll>
			   <Slidercard/>
			  </HorizontallScroll>
			</div>
		</div>
		</>
	)
}


export default PopularArtist;
