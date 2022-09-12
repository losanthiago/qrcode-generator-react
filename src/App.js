import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';

function App() {

  const [text, setText] = useState("")
  return (
    <div className="App">
      <h1> QRCode Generator</h1>
      <p> Inset You Text/Link</p>
      <input onChange={(element) => { setText(element.target.value)}}></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
  );
}

export default App;
