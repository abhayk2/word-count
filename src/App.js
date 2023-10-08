import { useState } from 'react';
import './App.css';

function App() {
  const [countChar, setCountChar] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const handleChange =(event)=>{
    setCountChar(event.target.value);
    setWordCount(event.target.value.trim().split(' ').length)
  }
  const handleClear = (event) => {
    event.preventDefault();
    setCountChar("");
    setWordCount(0);
  }
  return (
    <div className="App">
     <div>
        <header className='text-3xl text-center font-semibold mt-6 mb-2'>Word Counter</header>
        <p>Free Online Character and Word Count Tool</p>
        <textarea onChange={handleChange} className='mt-4 rounded border-none' placeholder='Type or Paste your text' name="Text" cols="100" rows="20" value={countChar} autoFocus></textarea>
        <div className='mt-2'>
        <button onClick={handleClear} type="button" class="text-white bg-gray-400 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Clear</button>
        </div>
        <div className='flex justify-evenly'>
          <div className='text-white bg-blue-800 font-medium rounded px-5 py-3'>Character: {countChar.length}</div>
          <div className='text-white bg-blue-800 font-medium rounded px-5 py-3'>Word: {wordCount}</div>
        </div>
     </div>
    </div>
  );
}

export default App;
