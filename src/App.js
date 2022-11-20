import { useState } from 'react';

function App() {
    {/* use state */ }
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/','8','+','-','.']

    {/* update calc */ }
    const updateCalc = value => {
        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    {/* digits creation */ }
    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())}>{i}</button>
                )
        }
        return digits;
    }

    {/* equals calc */ }
    const calculate = () => {
        setCalc(eval(calc).toString());
    }
    {/* delete calc */ }
    const deletelast = () => {
        if (calc == '') {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
    }

  return (
      <div className="app">
          <div className="calculator">
              {/* Display */}
              <div className="display">
                  {result ? <span>{result}</span> : ''} { calc || "0"}
              </div>
              {/* Controls */}
              <div className="operators">
                  <button onClick={()=> updateCalc('/')}>/</button>
                  <button onClick={() => updateCalc('*')}>*</button>
                  <button onClick={() => updateCalc('+')}>+</button>
                  <button onClick={() => updateCalc('-')}>-</button>
                  <button onClick={deletelast}>Delete</button>
              </div>

              {/* digits */}
              <div className="digits">
                  { createDigits() }
                  <button onClick={() => updateCalc('0')}>0</button>
                  <button onClick={() => updateCalc('.')}>.</button>
                  <button onClick={calculate}>=</button>
              </div>

          </div>
      </div>
  );
}

export default App;
