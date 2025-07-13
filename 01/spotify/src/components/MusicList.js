
import React from "react";
import "../assets/styles/searchContainer.css";

export default function  MusicList  ({ musicData})  {	
	return (
		<div className="musicSearchContainer">
		  {musicData.length > 0 ? (
			musicData.map((song)=> ( 
			  <div key={song.id} >
			  <h3>{song.title}</h3>	
			  <p>{song.content}</p>
			</div>
			))
		   ) : (
			<p>no music found. Try another search! </p>
		   )}
		</div>
	);
}



