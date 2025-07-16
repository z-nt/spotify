import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from "./pages/app.js";
import {BrowserRouter as Router} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
    	   <App/>
	</Router>
);

