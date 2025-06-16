import React , {useRef} from "react";
import "./cardStyle.css";
import song from "./dataCenter/data.js";


export 	function HorizontalScroll () {
  const scrollRef = useRef(null);
  const scrollAmount = 300;

	const scrollLeft = () => {
		scrollRef.current.scrollBy ({left:-scrollAmount, behavior:" smooth "  });
	}

	const scrollRight = () => {
	scrollRef.current.scrollBy({left:scrollAmount , behavior:"smooth" });

	}

	return (
		<div className="scroll-container">
	        	   <button
		            className="scroll-button left "
		            onClick={scrollLeft}
				>
				<i className="fas fa-arrow-left" ></i>
		   </button>	

			
	           <button className="scroll-button right " onClick={scrollRight} >
		  	
				<i className="fas fa-arrow-right" ></i>
		  
		   </button>	
		</div>
	)
}




 function  Card ( props ) { 
	
	return (
		<>	
		   <div className = "card" >
			<div className="imgContainer" >
			   <img src={props.imgUrl}  />  
			   <button className='playButton' onClick={props.handelClick} >
	<i className="fas fa-play-circle  play-btn "> </i>
		 	   </button>
			</div> 
			<h4>{props.title}</h4> 
		        <h5>{props.content}</h5>
			<h4>{props.albumstitle}_{props.time}</h4>
		   </div>
		</>
	)
} 
export   function CardContainer(props){
	return (
	    <div className = "cards-container" >
		{ 
		props.cards.map ((card) => (
			<Card
		          title={card.title}
			  content={card.content} 
			  imgUrl ={card.imgUrl}
			  time = {card.time} 
			  albumstitle={card.albumstitle}
			/> 
		  ))
		}
	    </div>
	)
}



