import './App.css';
import { useState } from 'react';
import data from './MOCK_DATA.json'



function App() {
  const [serachterm, setserachterm] = useState('');

  const callevent = (e) => {

    console.log("typing", e)
    const newsearch = e;
    setserachterm(e);
  }

  return (
    <div className="App">
     <div className='navbar'>
      <input onChange={(e) => callevent(e.target.value)}></input>
      </div>   
      {data.filter((val) => {
        if (serachterm == "") { return val }
        else if (val.first_name.toLowerCase().includes(serachterm.toLowerCase())) {
          return val;
        }
      }).map((val, index) => {
        return (
          <p key={index}>
            {val.first_name}
          </p>
        )
      })}
    </div>
  );
}

export default App;
