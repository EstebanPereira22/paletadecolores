import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './Components/FormColor';
import DisplayColor from './Components/DisplayColors';

function App() {
  const [list, setList] = useState(new Values('red').all(10));
  

  console.log(list);

  return (
        <div className="App">
        <FormColor setList={setList}/>
        <DisplayColor list={list}/>
      </div>
      
  )
}

export default App
