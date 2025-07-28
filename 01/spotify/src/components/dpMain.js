import React from "react";
import {useState} from "react";
import TrendingSongs from "./Trending_Co.js";
import PopularArtist from "./PopularArtist_Co.js";
import "../assets/css/utilities.css";
import "../assets/styles/main.css";
function DynamicPage ({searchQuery}) {
	return (
		<div className ="dynamicPage" >
		        {searchQuery && (
  <div className="searchResult bg-home">

                                {searchQuery.length > 0 ? (		
                                 searchQuery.map(song=> (
 <div key={song.id}  className="search-Result-items" >
								 
                                <div className="result-info">
                                        <h4>{song.title}</h4>
                                        <h5>{song.albumstitle}</h5>
                                </div>
                         </div>
                                 ))
                                ): (
                                <div>
				
				No results found For {searchQuery}
				</div>
                                )}
                        </div>
                )}

		
		      {!searchQuery || searchQuery.length === 0 ? (
                        <div className="TrendingContainer">
                                <TrendingSongs/>
                        </div>
                        ):null}

		        		
			<div className="PopularContainer"  >
				<PopularArtist/>	
			</div>					
		
		</div>	
	)

}
export default DynamicPage;

