import * as React  from "react";
import "../assets/styles/navbar_Style.css";
import "../assets/styles/navbar_CoStyle.css";
import LoginModal from "./LoginModal.js";
import {useState} from "react";
import SearchInput from "./searchInput.js"; 

function NavbarMenu (){
  const [showLoginModal , setShowLoginModal]= useState(false);
  
  const handelLoginClick = () => {
	setShowLoginModal(true);
  }
  
  const handelCloseModal = () => {
	setShowLoginModal(false);
  }

	
	return (
	<div className = "navbarMenu" >
		<div className="Logo">
		
		</div>

		<div className = "inputContaienr">
			<SearchInput/>
		</div> 
		
		<ul className="navbarList" >
		
		  <li className="navbarItems">		
			<a className="itemsLink"> Premium </a>
		  </li>

		  <li className="navbarItems">		
			<a className="itemsLink"> Support  </a>
		  </li>

		  <li className="navbarItems">		
			<a className="itemsLink"> Download </a>
		  </li>

		  <li className="navbarItems">		
			<a className="itemsLink"> | </a>
		  </li>

		  <li className="navbarItems">		
			<a className="itemsLink"> InstallApp </a>
		  </li>

		  <li className="navbarItems">		
			<a className="itemsLink"> Sign up </a>
		  </li>

		  <li className="navbarItems">		
			<button onClick={handelLoginClick}
			className="LoginButton">
			 Log in	
			</button>
		  </li>

		</ul>
			{showLoginModal && (
				<LoginModal onClose={handelCloseModal}/>
			)}
	</div>
	)}


export default NavbarMenu;
