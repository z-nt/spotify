import "./navbar.css"
import "./component.css"

import NewButton  from   "./components.js"
function NavbarMenu (){
	const Login = () => {
		alert ('button clicked ' ) ;
	};
        const signup = () => {
		alert ( "user sign up " );
	};
	return (
	<div className = "navbarMenu" >
		<h1>Logo</h1>
		<ul className="navbarList" >
		  <li className="navbarItems">		
			<NewButton
			 className="Permium textButtons " 
			 text="Permium"
			/>
		  </li>
		<li className="navbarItems">
		      	<NewButton
			 className="Support textButtons " 
			 text="Support"
			/>
		</li>
		  <li className="navbarItems">
			<NewButton
			 className="Download textButtons " 
			 text="Download"
			/>
		</li>
		  <li className="navbarItems">
			<NewButton
			 className="InstallApp textButtons " 
			 text="Install App"
			/>
		</li>
		  <li className="navbarItems">
			<NewButton
			 className="SignUp textButtons " 
			 text="Sign up"
			/>
		</li>	
		  <li className="navbarItems">
			<NewButton
			 className="LoginButton " 
			 text="Log in "
			/>
		</li>
		</ul>
	</div>
	)
}

export default NavbarMenu;
