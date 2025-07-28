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
  <div className="searchResult ">
			<ul className="navbar-result">
			    <li className="navbar-result-items active-btn ">
			       <button>All</button>
			    </li>

			    <li className="navbar-result-items">
			       <button>Songs</button>
			    </li>


			    <li className="navbar-result-items">
			       <button>Artist</button>
			    </li>


			    <li className="navbar-result-items">
			       <button>Playlists</button>
			    </li>


			    <li className="navbar-result-items">
			       <button>Albums</button>
			    </li>

			    <li className="navbar-result-items">
			       <button>Podcasts & Shows</button>
			    </li>

			    <li className="navbar-result-items">
			       <button>Genres & Moods</button>
			    </li>

			    <li className="navbar-result-items">
			       <button>Profiles</button>
			    </li>

			    <li className="navbar-result-items">
			       <button>Audibooks</button>
			    </li>

			</ul>

                                {searchQuery.length > 0 ? (		
                                 searchQuery.map(song=> (
 <div key={song.id}  className="search-Result-items" >
								 
                                <div className="result-info">
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

