import React from "react";
import "../assets/styles/songResult.css";



function TopResult({cardMusic}){
	return(
		<div className="result-container">
			<div className="top-result">
			   <div className="showCard">
  				<div className="showimage">
			     <img src= {cardMusic.imgUrl}/>
				</div>
				<h1>{cardMusic.title}</h1>
				<p>song.<span className="artistName">
					{cardMusic.albumstitle}
				</span></p>
			   </div>

			</div>
		      <div className="play-button">  
				<button>
			<i className="fas fa-play-circle  play-btn "> </i>
				</button>
   				
			</div>

		</div>
	)
}



export default TopResult;
