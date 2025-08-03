import React from "react";
import {useState} from "react";
import musicList from "./data.js";
import "../assets/styles/player.css";


export default function Player (track){
 
	return (
		<>  
		<div className="player-container" >
			<h1>This is container play music</h1>
				<div>{track.title}</div>

   		     </div>
		</>
	);

}
