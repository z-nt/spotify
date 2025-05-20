import NavbarMenu from "../navbarMenu/navbar.js";
import StaticMenu from "../staticMenu/staticMenu.js";
import DynamicPage from "../dynamicPage/main.js";
import "./root.css";



function Root () {
	return (
	  <div className = "rootContainer"  >
		<NavbarMenu />
		  <div className="rootDisplaye" > 
		     <StaticMenu  /> 
		     <DynamicPage  />
		  </div>
	  </div>
	)
}

export default Root;
