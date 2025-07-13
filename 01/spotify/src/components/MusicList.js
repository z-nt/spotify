
import React from "react";
import MusicCard from "./MusicCard";



export default function  MusicList  ({searchTerm , musicData})  {
	const filterMusic = musicData.filter((music) => 
	music.title.includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			{filterMusic.map((music) => (
			  <MusicCard 
			   key={music.id}
			   music={music}
			   />
			))}
		</div>
	);
}


