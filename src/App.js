import './App.css';
import './font_family';
import {useState} from 'react';

function App() {
  const [Bold,setBold] = useState(0);
  const [text,setText] = useState('');

  const savechanges = () => {
    window.alert('Changes saved');
  }
  const resetTextarea = () => {
    setText('hello');
  }

  return (
    <div className="App">
      <h1>TEXT EDITOR APPLICATION</h1>
      <div className='header_set'>
        <h3>Font Family   </h3>
        <select>
          <option>Roboto</option>
          <option>Arias</option>
        </select>
        <h3>Variant</h3>
        <select>
          <option>Bold</option>
          <option>normal</option>
        </select>
        <h3>Italic</h3>
        <input type="checkbox"></input>
      </div>
      <div className='text_box'>
        <textarea id="text" rows="20" cols="75"></textarea>
      </div>
      <div className='buttons'>
        <button onClick={resetTextarea}>Reset</button>
        <button onClick={savechanges}>Save</button>
      </div>
    </div>
  );
}

export default App;
