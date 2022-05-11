import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("toUppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log("toUppercase was clicked");
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const copyText = ()=>{
        let selectedText = document.getElementById('myBox');
        selectedText.select();
        navigator.clipboard.writeText(selectedText.value);
        
    }
    const removeSpaces = ()=>{
        let newText = text.split(/[' ']+/);
        setText(newText.join(" "));
    }


    return (
        <form>
            <div className='container my-3' style={{color: props.mode==='light' ? 'black':'white'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows='5' style={{color: props.mode==='light' ? 'black':'white', backgroundColor: props.mode==='light' ? 'white':'#383849'}}></textarea>
                </div>
                <button type='button' className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
                <button type='button' className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to lowercase</button>
                <button type='button' className='btn btn-primary mx-2' onClick={copyText}>Copy to Clipboard</button>
                <button type='button' className='btn btn-primary mx-2' onClick={removeSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3' style={{color: props.mode==='light' ? 'black':'white'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters, {text.split(" ").length * 0.008} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </form>
    )
}
