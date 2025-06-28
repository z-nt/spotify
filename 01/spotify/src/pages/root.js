import NavbarMenu from "../components/navbar_Co.js";
import StaticMenu from "../components/staticMenu.js";
import DynamicPage from"../components/dpMain.js";
import "../assets/styles/root.css";



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
