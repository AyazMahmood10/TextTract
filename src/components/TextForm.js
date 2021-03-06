import React,{useState}from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {

    const [text,setText] = useState("");

    const handleOnChange = (event) => { //the evenListerner 'onChange' provides event which we can use
      if((!event.target.value.replace(/\s/g, "").length)){
          setText("")
      }else{
          setText(event.target.value);  //Using event value to change the text in the form accordingly
      }
    }

    const handleUpperCaseClick = () => {

      if(text===""){
        props.showAlert("Please enter something in the textbox!","warning");//Passing alert
      }
      else{
          let newText = text.toUpperCase();
          setText(newText); //Setting the text to Upper Case on button click
          props.showAlert("Converted to Upper Case!","success");//Passing alert
      }
    }

    const handleLowerCaseClick = () => {

      if(text===""){
        props.showAlert("Please enter something in the textbox!","warning");//Passing alert
      }
      else{
      let newText = text.toLowerCase();
      setText(newText); //Setting the text to Lower Case on button click
      props.showAlert("Converted to Lower Case!","success");//Passing alert
      }
    }

    const handleClickClear = () => {

      if(text===""){
        props.showAlert("Please enter something in the textbox!","warning");//Passing alert
      }
      else{
      let newText = "";
      setText(newText); //Clearing the text area on click
      props.showAlert("Text Cleared!","success");//Passing alert
      }
    }

    const handleCopy = () => {//To copy the text
      if(text===""){
        props.showAlert("Please enter something in the textbox!","warning");//Passing alert
      }
      else{
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied to Clipboard!","success");//Passing alert
      document.getSelection().removeAllRanges();
      }
    }

    // const handleExtraSpaces = () => {//To remove extra spaces
    //   if(text===""){
    //     props.showAlert("Please enter something in the textbox!","warning");//Passing alert
    //   }
    //   else{
    //   let newText = text.split(/[ ]+/);
    //   setText(newText.join(" "));
    //   props.showAlert("Extra Spaces Removed!","success");//Passing alert
    //   }
    // }

    const handleSpecialChars = () => {//To remove special characters and numbers
      if(text===""){
        props.showAlert("Please enter something in the textbox!","warning");//Passing alert
      }
      else{
      let newText = text.replace(/[^A-Za-z]+/g, ' ');
      setText(newText);
      props.showAlert("Special Characters/Numbers Removed!","success");//Passing alert
      }
    }
    
    let wordCount= text===""? (0) : (text.split(/\s+/).filter((t) => t!=="").length); //to capture the count of words entered. The ternary operator will check for the conditon and return 0 if no word is entered
    let characterCount= text.split(/\s+/).join("").length; //to capture the count of number of characters.

    return (
      <>
        <div className="container" style={{color:props.mode==="light"?"black":"#C0C0C0"}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
            <textarea
                  className="form-control"
                  value={text}
                  onChange={handleOnChange}
                  id="myBox"
                  rows="10"
                  style={{
                    backgroundColor:props.mode==="light"?"white":"#3e3f42",
                    color:props.mode==="light"?"black":"#C0C0C0"
                  }}
            >
            </textarea>
      </div>
            <button type="button" className={`btn btn-${props.mode==="light"?"success":"dark"} mx-1 my-1`} onClick={handleUpperCaseClick}>Convert to Upper Case</button>
            <button type="button" className={`btn btn-${props.mode==="light"?"success":"dark"} mx-1 my-1`} onClick={handleLowerCaseClick}>Convert to Lower Case</button>
            <button type="button" className={`btn btn-${props.mode==="light"?"success":"dark"} mx-1 my-1`} onClick={handleClickClear}>Clear Text</button>
            <button type="button" className={`btn btn-${props.mode==="light"?"success":"dark"} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
            <button type="button" className={`btn btn-${props.mode==="light"?"success":"dark"} mx-1 my-1`} onClick={handleSpecialChars}>Remove Extra Whitespaces/Numbers/Special Characters</button>
            {/* <button type="button" className={`btn btn-${props.mode==="light"?"success":"dark"} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Special Chracters & Numbers</button> */}
      </div>
      <div className="container my-3" style={{color:props.mode==="light"?"black":"#C0C0C0"}}>
           <h2> Your text's summary</h2>
           <p> {wordCount} words and {characterCount} characters </p>
           <p> {0.008*wordCount} minutes can be spent to read the above entered text. </p>
           <h2>Preview</h2>
           <p>{text.length>0 ? text : "No text to preview"}</p>
      </div>
    </>  
  );
}


//Proptypes
TextForm.propTypes = {
        heading:PropTypes.string.isRequired
}


export default TextForm;
