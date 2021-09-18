import React from "react";


const About = (props) => {

    let myStyle = {
        color: props.mode==='dark' ? "white":"#3e3f42",
        backgroundColor: props.mode==='dark' ? "#454647":"white"
    };


    return (
    <div className="container" style={{color:props.mode==='dark' ? "white":"#3e3f42"}}>
        <h1 className="my-3">{props.aboutText}</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <strong>Analyze Your Text</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body" style={myStyle}>
                    <em>TextTract gives you a way to analyze your text quickly and efficiently. Be it word count, character count, case conversion of your text, removal of spaces and special characters and many more.</em>
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed"  type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong>Usage is totally free!</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body" style={myStyle}>
                    <em>TextTract is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</em>
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>Compatibility</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body" style={myStyle}>
                    <em>This utility software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera</em>
                    </div>
                </div>
            </div>
            
        </div>
      </div>  
    );
}

export default About;