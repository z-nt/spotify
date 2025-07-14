import React , {useState} from "react";

import NavbarMenu from "../components/navbar_Co.js";
import StaticMenu from "../components/staticMenu.js";
import DynamicPage from"../components/dpMain.js";
import "../assets/styles/root.css";
import song from "../components/songData.js";


function Root () {
	const list = song ; 
	const musicData = list[0].albums.songs;

	const [searchText , setSearchText] = useState("");
        const [filteredSongs,setFiltredSongs] = useState(musicData);

	const handelSearch = (term) =>{
	setSearchText(term);
		if(term === " "){
		  setFiltredSongs(musicData);
		}else{
			
		const filterMusic = musicData.filter ((song) => 
	  song.title.toLowerCase().includes(searchText.toLowerCase()) || 
	  song.content.toLowerCase().includes(searchText.toLowerCase())	
	);
	setFiltredSongs(filterMusic);


		}


	};



	return (
	  <div className = "rootContainer"  >
		<NavbarMenu
		onSearch={onSearch}
		searchText = {searchText}
		/>
		  <div className="rootDisplaye" > 
		     <StaticMenu />
		
		     <DynamicPage  
			onSearch={handelSearch}
			searchText={searchText}
			songs={filterMusic}	
		     />

		  </div>
	  </div>
	)
}

export default Root;
