import React from "react";
import "../assets/styles/songResult.css";



function SongResult({cardMusic}){

	return(
		<div className="result-container">
			<div className="top-result">
			  <h1>Top result</h1>

			   <div className="showCard">
  				<div className="showimage">
			     <img src= {cardMusic.imgUrl}/>
				</div>
				<h3>{cardMusic.title}</h3>
				<p>song.<span className="artistName">
					{cardMusic.albumstitle}
				</span></p>
			   </div>

			</div>

			<div className="song-result">

 		
			</div>
		</div>

	)
}



export default SongResult;
