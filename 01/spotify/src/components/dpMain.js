import React from "react";
import "../assets/styles/main.css";
import TrendingSongs from "./Trending_Co.js";
import PopularArtist from "./PopularArtist_Co.js";
import MusicList from "./MusicList.js";
function DynamicPage ({onSearch,searchTerm,songs}) {
	return (
		<div className ="dynamicPage" >
			<div className="TrendingContainer"  >
				<TrendingSongs/>
				<main>
				  <MusicList musicData = {songs} />
				</main>
			</div>					
		
			<div className="PopularContainer"  >
				<PopularArtist/>	
			</div>					
		
		</div>	
	)

}
export default DynamicPage;

