import React, { useState } from 'react'


export default function Textbar(props) {
     const handleUpperCase = () => {
          // console.log('Uppercase Was Clicked ' + text)
          let upperText = text.toUpperCase();
          setText(upperText)
          // alert('This Is the Upper-Case Converted Text ' + upperText)
     }

     const handleLowerCase = () =>{
          let lowerText = text.toLowerCase();
          setText(lowerText)
     }

     const clearText = () => {
          // let textclear = text.replaceAll(text , "Your Text Cleared")
          setText("  ")
     }

     
     const handleOnChange = (event) => {
               // console.log('On Change');
               setText(event.target.value)
     }
     
     const handleCopyText = () => {
          if (text) {
            navigator.clipboard.writeText(text)
              .then(() => {
                alert('Text copied to clipboard');
              })
              .catch((error) => {
                console.error('Error copying text:', error);
              });
          }
     };
     


     const [text, setText] = useState('')
     
     return (
          <>
               <div className="container my-3">
                    <h1 className='text-center my-2'>{props.heading}</h1>
                    <div className="pb-3">
                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example Text : Hi EveryOne</label>
                         <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
                    </div>
                    <button className="btn btn-primary m-1" onClick={handleUpperCase}>
                         Convert To Upper
                    </button>
                    <button className="btn btn-primary m-1" onClick={handleLowerCase}>
                         Convert To Lower
                    </button>
                    <button className="btn btn-primary m-1" onClick={clearText}>
                         Clear Text
                    </button>
                    <button className="btn btn-primary m-1" onClick={handleCopyText}>
                         Copy Text
                    </button>
                    
               </div>
               <hr />
               <div className="container my-5">
                    <h3>
                         Your Text Summary
                    </h3>
                    <p>
                         {text.split(" ").length} Words , {text.length} Characters
                    </p>
                    <p>
                         {0.08 * text.split(" ").length} Minutes To Read
                    </p>
                    <h3>
                         Preview
                    </h3>
                    <p>
                         {text}
                    </p>
               </div>
          
          </>
  )
}
