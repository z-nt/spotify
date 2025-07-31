import React from "react";
import TrendingSongs from "./Trending_Co.js";
import PopularArtist from "./PopularArtist_Co.js";
import TopResult from "./songResult.js";
import MusicCard from "./MusicCard.js";
import "../assets/css/utilities.css";
import "../assets/styles/main.css";
function DynamicPage ({searchQuery,tpResult}) {
	return (
		<div className ="dynamicPage">
		   <div className="scroll">
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

		
	<div className="top-result-container "> 
		<div   className="search-Result-items" >		
	
		<h1 className="search-music-header">Top result</h1>
				<div className="result-info">
				 <TopResult 
				   cardMusic={tpResult}   
				 />
                                </div>
                         </div>               

	<div className="other-list-music">
	
		<h1 className="search-music-header">Songs</h1>
		<div className="list-of-songs">
		{searchQuery.length > 0 ? (
			searchQuery.map(music => (
				<div className="bg-transparent">
				   <MusicCard music={music} />	
				</div>
			))
		):(

		<h1>not found </h1>

		)}
		</div>
	</div>

	</div>


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
	     		<div className="footer">  </div>	
		</div>	
		</div>
	)

}
export default DynamicPage;

