


import {Routes , Route } from "react-router-dom";
import {Suspense,lazy} from "react";
import LoadingSpinner from "../components/LoadingSpinner.js";


const Root = lazy(() => import ("./root.js"));

const Login = lazy(() => import ("./Login/login.js"));
const SignUp = lazy(()=> import ("./Login/signUp.js"));




function App(){


	return (
		<Routes>
		   <Route 
			path="/"
			element ={
			   <Suspense fallback={<LoadingSpinner/>}>
			    <Root/>
			   </Suspense>
			} 
		  />
	
		   <Route 
			path="/login"
			element ={
			   <Suspense fallback={<LoadingSpinner/>}>
			    <Login/>
			   </Suspense>
			} 
		  />

		   <Route 
			path="/signUp"
			element ={
			   <Suspense fallback={<LoadingSpinner/>}>
			    <SignUp/>
			   </Suspense>
			} 
		  />
		</Routes>
	)
}
export default App;
