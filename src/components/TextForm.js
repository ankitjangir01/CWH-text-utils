import React, {useState} from 'react'


export default function TextForm(props) {
    

    const handleUpClick = ()=>{
        console.log("toUppercase was clicked");
    }
    const handleOnChange = ()=>{
        
    }

    return (
        <form>
            <div className='container my-3'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    {/* <label for="myBox" className="form-label">Text Area</label> */}
                    <textarea className='form-control' onChange={handleOnChange} id='myBox' rows='5'></textarea>
                </div>
                <button type='button' className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
            </div>
        </form>
    )
}
