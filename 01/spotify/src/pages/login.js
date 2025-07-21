import React from "react";
import "../assets/pageStyles/login.css";
import {Link} from "react-router-dom";
import {FaGoogle , FaFacebook , FaApple } from "react-icons/fa";
export default function Login(){

	return (
	   <div className="loginContainer">
		<div className="loginBox">
		  <Link className="linkTag"  to ="/">
			<div   className="logo">

		 	      <svg
			      xmlns="http://www.w3.org/2000/svg"
      			      viewBox="0 0 496 496"
      			      width="40"
      			      height="40"
      			      aria-label="Spotify"
    				>
      			      <path fill="#333333" d="M248 0C111 0 0 111 0 248s111 248 248 248 248-111 248-248S385 0 248 0zm114 358c-4 6-11 8-17 4-45-28-102-34-169-18-7 2-13-3-15-9-2-7 3-13 9-15 73-19 137-12 189 20 7 4 9 11 5 18zm30-66c-5 7-14 9-21 5-52-32-131-42-191-23-8 2-16-3-18-11-2-8 3-16 11-18 71-21 159-9 221 26 6 4 9 13 4 21zm25-72c-66-39-175-43-238-24-9 2-18-4-20-13-2-9 4-18 13-20 75-22 193-17 269 24 8 5 11 16 5 24-5 8-16 11-24 5z"/>
    			     </svg>
			</div>	
		</Link>
			<div className="headerLoginfile" >
			 <h1>Log In To Spotify </h1>
			</div>	
			<div className="continueBox">	
			<div className="continue google" >
				<span className="icon-box">
				<FaGoogle className="google-icon" />
				</span>
				<h4>Continue With Google</h4>
			</div>	
			<div className="continue Facebook" >
				
				<span className="icon-box">
				<FaFacebook className="facebook-icon" />
				</span>
				<h4>Continue With Google</h4>

			</div>	

			<div className="continue Apple " >
			
				<span className="icon-box">
				<FaApple className="apple-icon" />
				</span>
				<h4>Continue With Google</h4>
			</div>
			</div>
			<div className="liner" > </div>	
			<div className="EmailInput" > </div>	
			<div className="continueButton" > </div>	
			<div className="footer" > </div>	
		</div>
	  </div>

	)

}
