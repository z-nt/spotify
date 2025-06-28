import React from "react";  
import "../assets/styles/static_CoStyle.css";



export function PlusButton({onClick}) {
	return (
		<button className="plusButton" onClick={onClick} >
		 <i className="fa fa-plus"></i>
		</button>
	)
};


function CreatePlayListButton ({onClick}){

	return (
		<>
		<button className="playListButton staticButtons " onClick={onClick}>
			Create playlist
		</button>
		</>
	)
}




export function CreatePlayList (){
	const handelClick = () => {
		console.log("createList ");
	}	
	return (
		<div className="playListContainer staticTextStyle ">
			<h4>Create your first playlist </h4>
			<p>it is easy, we will help you </p>

			<CreatePlayListButton onClick={handelClick}  />
		</div>	
	)
}







function Browsepodcasts ({onClick}){

	return (
		<>
		<button className="browseButton staticButtons " onClick={onClick}>
			Browse podcasts
		</button>
		</>
	)
}




export function CreateBrowsePadcasts (){
	const handelClick = () => {
		console.log("browse ");
	}	
	return (
		<div className="browseContainer staticTextStyle  ">
			<h4>Lest find some podcasts to follow </h4>
			<p>we will keep you updated on new episodes </p>

			<Browsepodcasts onClick={handelClick}  />
		</div>	
	)
}
















