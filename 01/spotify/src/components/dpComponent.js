import React , {useState} from "react";
import {CardContainer} from "./dpCard_Co.js";
//import TrendCard from "./data.js";
import song from "./songData.js";



export default  function SliderCard (){
	const list = song; 
	const albums = list[0].albums.songs;
	
	return (
		<>
			<div className = 'container'>
			
				<CardContainer cards={albums}/>
			
			</div> 				
		</>

	) 
} 







