import React from "react";
import "./main.css";
import TrendingSongs from "./childComponents/Trending.js";



function DynamicPage () {
	return (
		<div className ="dynamicPage" >
			<div className="TrendingContainer"  >
				<TrendingSongs/>					
			</div>					
		</div>	
	)

}
export default DynamicPage;

