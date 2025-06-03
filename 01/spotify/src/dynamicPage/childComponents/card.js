import React from "react";
import "./cardStyle.css";

 function  Card ( props ) {
	return (
		<>	
		   <div className = "card" >
			<span>
			   <img src={props.imgUrl}  />  
			   <button onClick={props.handelClick} >
			      play
		 	   </button>
			</span> 
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



