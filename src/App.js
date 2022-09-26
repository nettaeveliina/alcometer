import { useState } from 'react';
import './App.css';

function App() {
  const [Weight, setWeight] = useState('')
  const [Bottles, setBottles] = useState(0)
  const [Time, setTime] = useState(0)
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0)

  

  function handleSubmit(e) {
    e.preventDefault();
    let levels = 0;
    let litres = Bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = Weight / 10
    let gramsLeft= grams - (burning * Time)
    if (gender === 'male') {
      levels = gramsLeft / (Weight * 0.7)
    }
    else {
      levels = gramsLeft / (Weight * 0.6)
    }
    setResult(levels);
  }

  return (
    <>
    <div className='tausta'>
    <form onSubmit={handleSubmit}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" step="1" value={Weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label>
        <select name="bottles" type="number" step="2" value={Bottles} onChange={e => setBottles(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select type="number" value={Time} onChange={e => setTime(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
      <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultCheck onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="Female" onChange={e => setGender(e.target.value)} /><label>female</label>
      </div>
      <div>
      <output>{result.toFixed(2)}</output>
      </div>
      <button>Calculate</button>
    </form>
    </div>
    </>
  );
}

export default App;
