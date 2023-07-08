import { useState } from 'react';
import './App.css'

function App() {
const [number, setNumber] = useState(null);
const [table, setTable] = useState([]);

const handleChange = (e) => {
  setNumber(e.target.value);
  if (e.target.value !== '') {
    setTable(generateTable());
  } else {
    setTable([]);
  }
};

const generateTable = () => {
  var table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(
      <tr key={i}>
         <td>{`${number} x ${i}`}</td>
          <td>=</td>
          <td>{number * i}</td>
      </tr>
    )
  }
  return table;
}

  return (
    <div className='container'>
      <div className='box'>
      <h1>Wanna learn table?</h1>
      <h3>Write the number you want the table of!</h3>
      <input type="number" value={number} onChange={handleChange} />
      </div>
      {number  && (
        <div className='table-div'>
      <table value={table}>
        <tbody>{generateTable()}</tbody>
      </table>
      </div>
      )}
      
      </div>
  );
}

export default App;
