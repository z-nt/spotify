import React from "react";
import "./main.css";
import TrendingSongs from "./childComponents/Trending.js";



function DynamicPage () {
	return (
		<div className ="dynamicPage" >
			<TrendingSongs/>
					
			
		</div>	
	)

}
export default DynamicPage;

