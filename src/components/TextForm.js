import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = ()=>{
        // console.log("toUppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <form>
            <div className='container my-3'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows='5'></textarea>
                </div>
                <button type='button' className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
            </div>
        </form>
    )
}
