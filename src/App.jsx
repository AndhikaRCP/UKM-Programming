import { useState } from 'react';
import './App.css';

function Calculate() {
  const [input1, setinput1] = useState(0);
  const [input2, setinput2] = useState(0);
  const hasil = input1 + input2;

  return (
      <div className="kalkulator">
        <h2>Kalkulator Pertambahan </h2>
        <input type="number" id="input1" onChange={(e) => setinput1(Number(e.target.value))}/>
        <input type="number" id="input2" onChange={(e) => setinput2(Number(e.target.value))}/>
        <p>Hasil : {`${hasil}`}</p>
      </div>
  );
}
export default Calculate;