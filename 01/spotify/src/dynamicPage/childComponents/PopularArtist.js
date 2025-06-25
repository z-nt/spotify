import React from "react";
import "./artistStyle.css";
import Slidercard from "./component.js";
import {HorizontallScroll} from "./card.js";


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
