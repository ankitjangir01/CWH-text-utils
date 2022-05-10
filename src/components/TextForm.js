import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        // console.log("toUppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log("toUppercase was clicked");
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <form>
            <>
            <div className='container my-3'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows='5'></textarea>
                </div>
                <button type='button' className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
                <button type='button' className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to lowercase</button>
            </div>
            <div className='container my-3'>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters, {text.split(" ").length * 0.008} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </>
        </form>
    )
}
