import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("on change was clicked");
        setText(event.target.value);
    } 
    const handleReverse = () =>{
        let newtext=text.split("").reverse().join("");
        setText(newtext);
    }
    const handleReverseW = () => {
   let reversed = text.split(" ")
   .map(word => {
      return word
      .split("")
      .reverse()
      .join("");
   })
   .join(" ");
   setText(reversed);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                    <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary m-2" onClick={handleReverse}>Reverse Text</button>
                    <button className="btn btn-primary m-2" onClick={handleReverseW}>Reverse Word</button>
                </div>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}
