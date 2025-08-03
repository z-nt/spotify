import React , {useRef,useState} from "react";
import {CardContainer} from "./dpCard_Co.js";
//import TrendCard from "./data.js";
import song from "./songData.js";



export default  function SliderCard (){
	const [message , setMessage]=useState(" ");
	const list = song; 
	const albums = list[0].albums.songs;

   const handelchilld = (newMessage) => {

	setMessage(newMessage);

   };


	return (
		<>
			<div className = 'container'>
				<h1>{message}</h1>			
				<CardContainer
				onButtonclick={handelchilld}
				cards={albums}/>
			
			</div> 				
		</>

	) 
} 







