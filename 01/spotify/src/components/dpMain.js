import React from "react";
import "../assets/styles/main.css";
import TrendingSongs from "./Trending_Co.js";
import PopularArtist from "./PopularArtist_Co.js";
import SearchInput from "./searchInput.js";

function DynamicPage () {
	return (
		<div className ="dynamicPage" >
			<div className="TrendingContainer"  >
				<TrendingSongs/>	
			</div>					
		
			<div className="PopularContainer"  >
				<PopularArtist/>	
			</div>					
		
		</div>	
	)

}
export default DynamicPage;

