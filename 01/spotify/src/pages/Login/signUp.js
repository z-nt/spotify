import React from "react";
import {FaGoogle,FaApple} from "react-icons/fa";
import {GetEmailFromUser} from  "./components/componentsForLogin.js";
import {Link} from "react-router-dom";
import "../../assets/css/variable.css";
import "../../assets/css/utilities.css";
import "./LoginStyle/style.css";

export default function SignUp (){
	return (
	 
	<div className=" bg-home- h100  w100 pos-rel d-flex  justify-center ">
		
		<div className="signUp-container d-flex items-center d-flex-col  justify-evenly h100">
			<div className="logo-svg">
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
			<div className="signup-text">
 			 <span className="line1">Sign up to</span>
  			 <span className="line2">start listening</span>
			</div>




			<div className="red-bor signUp-input">
			<GetEmailFromUser
			  textLabel={"Email address"}
			  textPlaceHolder={"name@domain.com"}
		          textButton={"Next"}
			  idName={"next-button"}
			  className={"btn-submited"}

			/>
			</div>



				<div className="divider-grid">
 				   <div className="line"></div>
  				   <div className="text">or</div>
  				   <div className="line"></div>
				</div>
			<div className="red-bor signUp-links d-flex d-flex-col items-center bg-transparent  ">
				<div className="btn-link">
 					<span className="icon-box">
					<FaGoogle/>
					</span>
					<h4>Continue With Google</h4>
				</div>	

				<div className="btn-link">
 					<span className="icon-box">
					<FaApple/>
					</span>
					<h4>Continue With Facebook</h4>
				</div>	

			</div>







				<div className="divider-grid2">
 				   <div className="liner"></div>
				</div>



			<div className=" signUp-footer">
				<Link to="/login">
                        <button className="footerButton">Already have an account?
                           <span> Log In Here </span>
                        </button>
                </Link>


			</div>
		</div>
	  </div>
	)
}








