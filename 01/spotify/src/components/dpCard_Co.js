import React , {useRef} from "react";
import "../assets/styles/cardStyle.css";


export 	function HorizontallScroll ({children}) {
  const scrollRef = useRef(null);
  const scrollAmount = 200;


	const scrollLeft = () => {
	if (scrollRef.current){	
	scrollRef.current.scrollBy ({left:-scrollAmount,behavior:"smooth"});
	}
	}


	const scrollRight = () => {
		if(scrollRef.current){
	scrollRef.current.scrollBy({left:scrollAmount,behavior:"smooth"});
	}
	}

	return (
		<div className="scroll-container">
	       
	   <button className="scroll-button left" onClick={scrollLeft}>
		 <i className="fas fa-arrow-left" ></i>
	   </button>	

		<div className="scroll-content" ref={scrollRef}>
		{children}
		</div>

	   <button className="scroll-button right " onClick={scrollRight} >	  			<i className="fas fa-arrow-right" ></i>
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
}; 
export   function CardContainer(props){
	return (
	    <div className = "cards-container" >
		{ 
		props.cards.map ((card) => (
			<Card
			  className={card.className}
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
};



















