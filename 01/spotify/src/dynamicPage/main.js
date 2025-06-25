import React from "react";
import "./main.css";
import TrendingSongs from "./childComponents/Trending.js";
import PopularArtist from "./childComponents/PopularArtist.js";


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

