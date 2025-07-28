
import {useState} from "react";
import React from "react";
import NavbarMenu from "../components/navbar_Co.js";
import StaticMenu from "../components/staticMenu.js";
import DynamicPage from"../components/dpMain.js";
import "../assets/styles/root.css";


function Root () {
  const [searchQuery,setSearchQuery] = useState("");
  const handelSearchChange = (query) => {
	setSearchQuery(query)
  }




	return (
	  <div className = "rootContainer"  >
		<NavbarMenu
		onSearchChange={handelSearchChange}
		/>
		  <div className="rootDisplaye" > 
		     <StaticMenu />
		
		     <DynamicPage  
		      searchQuery={searchQuery}
		     />

		  </div>
	  </div>
	)
}

export default Root;
