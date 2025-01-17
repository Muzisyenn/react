import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); 
  const [step, setStep] = useState(1);  

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sayaç</h1>
      <h2>{count}</h2>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="stepInput" style={{ marginRight: '10px' }}>Artış/Azalış Değeri:</label>
        <input
          id="stepInput"
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ width: '60px', textAlign: 'center' }}
        />
      </div>

      <button onClick={increment} style={{ margin: '5px' }}>Artır</button>
      <button onClick={decrement} style={{ margin: '5px' }}>Azalt</button>
      <button onClick={reset} style={{ margin: '5px' }}>Sıfırla</button>
    </div>
  );
}

export default App;
