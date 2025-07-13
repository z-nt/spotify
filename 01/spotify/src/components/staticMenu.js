import "../assets/styles/staticMenu.css";
import React from "react";
import {PlusButton,CreatePlayList,CreateBrowsePadcasts} from "./static_Co.js";
function StaticMenu (){
	return (
		<div className ="staticMenu" >
			<div className="headerStaticMenu">
			 	<h4>Your Library</h4>
				<PlusButton/>
			</div>
			<div className="componentsContainer" > 	
				<CreatePlayList/>
				<CreateBrowsePadcasts/>
			</div>
			<div className="staticFooter">
				 <ul className="footerItemsList">
			 		<li className="items">
					Legal
					</li>
			 		<li className="items">
					Safty & Privacy Center
					</li>
			 		<li className="items">
					Privacy Policy 
					</li>
			 		<li className="items">
					Cookie Setting 
					</li>
			 		<li className="items">
					About Ads 
					</li>
			 		<li className="items">
					Accessibillity 
					</li>
		
			 		<li className="items">
					Accessibillity 
					</li>
				</ul>
				<h4>Cookies</h4>
			</div>
		</div>
	)
}

export default StaticMenu;
