
import {useState} from "react";
import React from "react";
import NavbarMenu from "../components/navbar_Co.js";
import StaticMenu from "../components/staticMenu.js";
import DynamicPage from"../components/dpMain.js";
import Footer from "../components/footer.js";
import "../assets/styles/root.css";


function Root () {
  const [searchQuery,setSearchQuery] = useState("");
  const handelSearchChange = (query) => {
	setSearchQuery(query)
  }

   const topResult = searchQuery.length > 0 ? searchQuery[0]:null; 


	return (
	  <div className = "rootContainer"  >
		<NavbarMenu
		onSearchChange={handelSearchChange}
		/>
		<StaticMenu/>
		  <div className="rootDisplaye" > 
		
		     <DynamicPage  
		      tpResult={topResult}
		      searchQuery={searchQuery}
		     />
		  </div>
	  </div>
	)
}

export default Root;
