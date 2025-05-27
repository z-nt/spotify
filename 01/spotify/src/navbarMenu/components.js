import React from "react";




function NewButton({text , onClick , disable, className }){
	return (
	 <button
	    className= {className} 
	    onClick={onClick} 
	    disable={disable}  
	 >

		{text}
	</button>

	)
}


export default NewButton;


function Textfield(){
	return (
		<input/>

	)
	
}

export default Textfield;



















