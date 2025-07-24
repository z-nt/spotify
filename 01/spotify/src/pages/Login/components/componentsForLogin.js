import React  , {useState}from "react";
import "../../../assets/pageStyles/loginSection.css";


const GetEmailFromUser = ({textLabel,textPlaceHolder,textButton,idName,className}) => {
	const [inputValue , setInputValue] = useState("");
	const [error,setError] = useState(false);
	

	const handelSubmit = () => {
		if(!inputValue.trim()){
		  setError(true);
		}else{

		setError(false);
		}
	}
	return (
		<div className="input-container">
		 <label htmlFor="emailorusername">{textLabel} </label>
		 <input
		   type="text"
		   id="emailorusername"
		   value={inputValue}
		   onChange= {(e) => {
			setInputValue(e.target.value);
			setError(false);
		   }}
		   className={error ? "error-input":" "}
		   placeholder={textPlaceHolder}
		   />

		{error && (
                        <p className="error-message">
                         ! Please enter your Spotify username or email
                        </p>
                 )}
		  <button className={className}     onClick = {handelSubmit} id={idName}>
		   {textButton}
		  </button>
		</div>
	);
}

export  {GetEmailFromUser};





