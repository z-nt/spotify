
import {react,useState} from "react";
import song from "./songData.js";
import "../assets/styles/searchInput.css";


const list = song;
const music = list[0].albums.songs;

export default function SearchInput (){
  
  const [selectedItems , setSelectedItem]= useState(null);

  const handelSearch = (e) => {
        let value = e.target.value;
  	
	
	const match = music.find((item) => 
	item.title.toLowerCase().includes(value)
	);
		setSelectedItem(match || null);
    };
	return (
		<>
		<div className="searchInputContainer">
           	 <input
			className="inputSearch" 
			placeholder="what do you want to play?"
			type="text"
			onChange={handelSearch}
		
		/>
		</div>

		{selectedItems && (
		   <div>
			<p>work:{selectedItems.title}</p>
		   	
		   </div>
		)}
		</>
	)
}
