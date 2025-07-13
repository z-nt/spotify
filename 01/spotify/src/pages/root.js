import React , {useState} from "react";

import NavbarMenu from "../components/navbar_Co.js";
import StaticMenu from "../components/staticMenu.js";
import DynamicPage from"../components/dpMain.js";
import "../assets/styles/root.css";
import MusicList from "../components/MusicList.js";
import song from "../components/songData.js";



function Root () {
	const list = song ; 
	const musicData = list[0].albums.songs;

	const [searchText , setSearchText] = useState("");
	
	const filterMusic = musicData.filter ((song) => 
	  song.title.toLowerCase().includes(searchText.toLowerCase()) || 
	  song.content.toLowerCase().includes(searchText.toLowerCase())	
	);



	return (
	  <div className = "rootContainer"  >
		<NavbarMenu setSearchText = {setSearchText}/>
		  <div className="rootDisplaye" > 
		     <StaticMenu  /> 
		     <DynamicPage  />
		      <MusicList musicData = {filterMusic} />	
		  </div>
	  </div>
	)
}

export default Root;
