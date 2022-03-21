import React , {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
         console.log("Uppercase was clicked" +text)
         let newText = text.toUpperCase();
         setText(newText)  
         props.showAlert("Converted to Upper Case" , "Success");
    }

    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" +text)
        let newText = text.toLowerCase();
        setText(newText)   
        props.showAlert("Converted to Lower Case" , "Success");  
   }
 

    const handleOnChange = (event)=>{
         console.log("On change")
         setText(event.target.value);
    }

    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        let newText =  text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const[text , setText] = useState(''); 
   // text = "new text" ; //Wrong way to change the state
   // setText("new text") ; //Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1  style={{color: props.mode === 'dark' ? 'white' : 'grey'}}>{props.heading}</h1>
            <div  className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                Convert to LowerCase
            </button>

            <button className="btn btn-primary mx-1" onClick={handleCopy}>
               Copy Text
            </button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
               Remove Extra Spacees
            </button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'grey'}}>
             <h1> Your text summary</h1>
             <p>{text.split(" ").length} Words , {text.length} characters</p>
             <p>{0.008 * text.split(" ").length} Minutes read</p>
             <h2>Preview</h2>
             <p>{text}</p>
        </div> 
        </>
    )
}
