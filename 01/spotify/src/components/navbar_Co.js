import * as React  from "react";
import {useState} from "react";
import "../assets/styles/searchInput.css";
import {FaSearch,FaMusic,FaHome} from 'react-icons/fa';
import {Link} from "react-router-dom";
import "../assets/css/variable.css";
import "../assets/css/utilities.css";
import "../assets/styles/navbar_CoStyle.css";
import song from "./songData.js";




function NavbarMenu ({onSearchChange}){

	const list = song ;
	const music = list[0].albums.songs;
	const [searchText , setSearchText] = useState("");
	const [searchResult,setSearchResult] = useState([]);
	const [isSearching , setIsSearching] = useState(false);
 


	const handelSearch = (e) => {
	  const text = e.target.value.toLowerCase();
	   setSearchText(text)
		
		if(text.length > 0 ) {
			setIsSearching(true);
			const result = music.filter(
			  song => song.title.toLowerCase().includes(text) || 
			  song.albumstitle.toLowerCase().includes(text)   ||
			  song.content.toLowerCase().includes(text)
			);
			setSearchResult(result);
			onSearchChange(result);
		}else{
		 setIsSearching(false);
		 setSearchResult([]);
		 onSearchChange("");	
		}
	};

	return (
<div className = "navbarMenu">
		<div className="Logo">
		
		<svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 496 496"
      width="40" 
      height="40"
      aria-label="Spotify"
    >
      <path fill="#ffffff" d="M248 0C111 0 0 111 0 248s111 248 248 248 248-111 248-248S385 0 248 0zm114 358c-4 6-11 8-17 4-45-28-102-34-169-18-7 2-13-3-15-9-2-7 3-13 9-15 73-19 137-12 189 20 7 4 9 11 5 18zm30-66c-5 7-14 9-21 5-52-32-131-42-191-23-8 2-16-3-18-11-2-8 3-16 11-18 71-21 159-9 221 26 6 4 9 13 4 21zm25-72c-66-39-175-43-238-24-9 2-18-4-20-13-2-9 4-18 13-20 75-22 193-17 269 24 8 5 11 16 5 24-5 8-16 11-24 5z"/>
    </svg>
		</div>

		<div className = "inputContainer">

                <div className="searchInputContainer">

		 <div className="homeButton">
			<FaHome className="home-icon" />
		</div>

	<div className="items-container" >
		<FaSearch className="search-icon"/>
		<input

                        className="inputSearch"
                        placeholder="what do you want to play ?"
                        type="text"
			value={searchText}
			onChange={handelSearch}
                />
			

		<FaMusic className="browse-icon" />
                </div>
		</div>
 
		<ul className="navbarList" >
		
		  <li className="navbarItems">		
			<a href="#"  className="itemsLink"> Premium </a>
		  </li>

		  <li className="navbarItems">		
			<a href="#" className="itemsLink"> Support  </a>
		  </li>

		  <li className="navbarItems">		
			<a href="#"  className="itemsLink"> Download </a>
		  </li>

		  <li className="navbarItems">		
			<a href="#" className="itemsLink"> | </a>
		  </li>

		  <li className="navbarItems">		
			<a href="#" className="itemsLink"> InstallApp </a>
		  </li>

		  <li className="navbarItems">		
		<Link to="/signUp" > 
			<a href="#" className="itemsLink"> Sign up </a>
		</Link>  
		</li>

		  <li className="navbarItems loginItem">
		   <Link className="loginLink" to ="/Login">
			<button 
			className="LoginButton">
			 Log in	
			</button>
		   </Link>
		  </li>

		</ul>
		 </div>



	</div>
	)}


export default NavbarMenu;
