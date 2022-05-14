import React, { useState } from 'react'
import Alert from './Alert';
export default function TextForm(props) {
    const [text, setText] = useState('');
    const [alert,setAlert] = useState(null);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        setAlert({
            msg: 'copied to clipboard',
            type: 'success'
        })
        setTimeout(()=>{
            setAlert(null);
        },2000)
    }
    const removeSpaces = ()=>{
        let newText = text.split(/[' ']+/);
        setText(newText.join(" "));
    }


    return (
        <form>
            <Alert alert={alert} />
            <div className='container my-3' style={{color: props.mode==='light' ? 'black':'white'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows='5' style={{color: props.mode==='light' ? 'black':'white', backgroundColor: props.mode==='light' ? 'white':'#383849'}}></textarea>
                </div>
                <button type='button' className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
                <button type='button' className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to lowercase</button>
                <button type='button' className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy to Clipboard</button>
                <button type='button' className='btn btn-primary mx-1 my-1' onClick={removeSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3' style={{color: props.mode==='light' ? 'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element!==""}).length} words, {text.length} characters, {text.split(" ").filter((element)=>{return element!==""}).length* 0.008} minutes read</p>
            </div>
        </form>
    )
}
