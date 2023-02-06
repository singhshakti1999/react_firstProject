import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';

export default function TextForm(props) {
    
    const updateText = ()=>
    {
        console.log("button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>
    {
        console.log('on change')
        setText(event.target.value)
    }

    const clear = () =>
    {
        let newText = ' ';
        setText(newText);

    }
   const  copyText = () =>
    {
       let text = document.getElementById("box");
       text.select();
       navigator.clipboard.writeText(text.value);
    }
    const [text , setText] = useState(' ');
  return (
    <>
    <div className='container my-5' style = {{color: props.mode === 'light'?'grey':'white'}}>
        <h1>Enter the text to analyze below</h1>
       <Form>
         <Form.Group className="mb-3 my-3" controlId="exampleForm.ControlTextarea1">
           <Form.Control as="textarea" placeholder="Enter the text" id="box" cursor="pointer" style = {{background: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} rows={5} value={text} onChange={handleOnChange}/>
         </Form.Group>
         <Button  onClick={updateText}>
          Click to Convert Uppercase
         </Button>{' '}
         <Button className='bg bg-danger mx-3' onClick={clear}>
          Clear
         </Button>
         <Button className='bg bg-danger mx-3' onClick={copyText}>
          Copy
         </Button>
       </Form>
    </div>
    <div className="container my-5" style= {{color: props.mode === 'light'?'black':'white' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} <b>words</b> {text.length} <b>Characters</b></p>
        <p>{0.008 * text.split(" ").length} <b>Minutes required to read the text</b></p>
        <h1>Preview</h1>
        <p style = {{color: props.mode==='light'?'black':'white'}}>{text.length>0?text:"enter something to preview "}</p>
    </div>

    </>
  )
}
