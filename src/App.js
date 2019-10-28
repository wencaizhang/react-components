import React, { useState } from 'react';
import './App.css';

// import Input from "./Input";
import InputNumber from "./InputNumber";
import Confirm from "./Confirm/demo";

function App() {
  // const [inputValue, setInputValue] = useState('111')
  const [value, setValue] = useState(111)
  console.log(value);
  
  return (
    <div className="App">
      {/* <div className="demo">
        input: <Input placeholder="请输入关键字" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
        <hr />
      </div> */}
      <div className="demo">
        value: 
        <InputNumber
          value={value}
          onChange={ v => {
            v = Number.parseInt(v)
            v = isNaN(v) ? '' : v
            setValue(v)
          } }
        />
        <hr />
        defaultValue: 
        <InputNumber
          defaultValue={value}
          onChange={ v => {
            v = Number.parseInt(v)
            v = isNaN(v) ? '' : v
            setValue(v)
          } }
        />
      </div>

      <div className="demo">
        <Confirm />
      </div>

    </div>
  );
}

export default App;
