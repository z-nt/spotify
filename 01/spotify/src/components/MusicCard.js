

import React from "react";

export default function MusicCard ({music}){
	return (
		<div className="musicCard">
			<h3>{music.title}</h3>
			<p>{music.content}</p>
		</div>
	)
}


