import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => setNum1(Number(e.target.value));
  const handleNum2Change = (e) => setNum2(Number(e.target.value));

  const handleAddition = () => setResult(num1 + num2);
  const handleSubtraction = () => setResult(num1 - num2);
  const handleMultiplication = () => setResult(num1 * num2);
  const handleDivision = () => {
    if (num2 !== 0) {
      setResult(num1 / num2);
    } else {
      setResult("Error: División por cero");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-blue-500">
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Número 1"
        className="w-48 p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Número 2"
        className="w-48 p-2 mb-4 border border-gray-300 rounded"
      />

      <div className="flex justify-around w-48 mb-4 buttons">
        <button
          onClick={handleAddition}
          className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-800"
        >
          Add
        </button>
        <button
          onClick={handleSubtraction}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Substract
        </button>
        <button
          onClick={handleMultiplication}
          className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
        >
          Multiply
        </button>
        <button
          onClick={handleDivision}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Split
        </button>
      </div>

      <h2 className="text-4xl font-bold text-white">
        Result: {result !== null ? result : "---"}
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
