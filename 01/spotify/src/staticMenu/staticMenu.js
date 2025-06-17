import "./staticMenu.css";
import {PlusButton} from "./components/components.js";

function StaticMenu (){
	return (
		<div className ="staticMenu" >
			<div className="headerStaticMenu">
		
			 	<h4>Your Library</h4>
				<PlusButton  />
			</div>
		
		</div>

	)


}

export default StaticMenu;
