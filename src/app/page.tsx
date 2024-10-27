"use client"; // Client component ke liye

import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center mx-auto my-0 rounded-lg p-5 shadow-lg border border-color" 
      style={{
        height: '100vh', // Cover full viewport height
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMLn9APQaahQFuy7OYHjBPTpPG1IarcUO4g&s")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '100%', // Full width
      }}
    >
      <h1 className="text-white mb-5 text-2xl">Mobile Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        className="w-full p-5 mb-4 rounded-lg border-2 border-color text-4xl text-right shadow-md bg-white bg-opacity-80"
      />
      <div className="grid grid-cols-4 gap-2 w-full">
        {['7', '8', '9', '/'].map(value => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-5 rounded-lg bg-color text-white text-2xl cursor-pointer transition duration-300 transform hover:scale-95 shadow-md"
          >
            {value}
          </button>
        ))}
        {['4', '5', '6', '*'].map(value => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-5 rounded-lg bg-color text-white text-2xl cursor-pointer transition duration-300 transform hover:scale-95 shadow-md"
          >
            {value}
          </button>
        ))}
        {['1', '2', '3', '-'].map(value => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-5 rounded-lg bg-color text-white text-2xl cursor-pointer transition duration-300 transform hover:scale-95 shadow-md"
          >
            {value}
          </button>
        ))}
        {['C', '0', '=', '+'].map(value => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-5 rounded-lg bg-color text-white text-2xl cursor-pointer transition duration-300 transform hover:scale-95 shadow-md"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
