

import React from "react";
import "../assets/styles/MusicCard.css";




export default function MusicCard ({music}){
	return (
	<div className="musicCard">
		<div className="music-info">
		   <div className="information">
			<img src = {music.imgUrl}/>   
			<div className="info-text">
			   <h3>{music.title}</h3>
			   <h5>{music.content}</h5>
			</div>
		   </div>
		</div>



		<div className="music-option">
		    <div className="option-buttons">
		<span className="box-hidden"><button>+</button></span> 
				   <h5>{music.time}</h5>
		<span  className="box-hidden"><button>...</button></span>
		     </div>
		</div>
	</div>
	)
}


