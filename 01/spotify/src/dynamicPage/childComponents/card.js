import React from "react";
import "./cardStyle.css";

 function  Card ( props ) {
	return (
		<>	
		   <div className = "card" >
			<div className="imgContainer" >
			   <img src={props.imgUrl}  />  
			   <button className='playButton' onClick={props.handelClick} >
			      <i className="fas fa-play-circle  play-btn "  > </i>
		 	   </button>
			</div> 
			<h4>{props.title}</h4> 
		        <h5>{props.content}</h5>
		   </div>
		</>
	)
} 

export default  function CardContainer(props){

	return (
	    <div className = "cards-container" >
		{ 
		props.cards.map ((card) => (
			<Card
		          title={card.title}
			  content={card.content} 
			  imgUrl ={card.imgUrl}
			/> 
		  ))
		}
	    </div>
	)
}



