import React from "react";
import {CardContainer} from "./card.js";
//import TrendCard from "./data.js";
import song from "./dataCenter/data.js";

export default  function SliderCard (){
 const list = song; 
const albums = list[0].albums.songs;
	console.log(albums );
	return (
		<>
			<div className = 'container'>
				
				<CardContainer cards={albums} />
			
			</div> 				
		</>

	) 
} 







