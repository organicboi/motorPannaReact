import React, { useState } from "react";
import "./App.css";

const data = {
  customOption1: {
    value: [1, 2, 3, 4, 5],
  },
  customOption2: {
    value: [6, 7, 8, 9, 10],
  },
  customOption3: {
    value: [11, 12, 13, 14, 15],
  },
};

function App() {
  const [selectedOption, setSelectedOption] = useState(Object.keys(data)[0]);
  const [customText, setCustomText] = useState("");
  const [amount, setAmount] = useState("");
  const predefinedText = "Predefined Text"; // Set your predefined text here

  const handleOptionChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  };

  const handleCopyClick = () => {
    const textToCopy = `${predefinedText} ${customText} ${data[
      selectedOption
    ].value.join(", ")}`;
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copied to clipboard!");
  };

  const calculateTotal = () => {
    const selectedData = data[selectedOption].value;
    const total = Number(amount) * selectedData.length;
    return total;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Preview</h1>
      </header>
      <main>
        <div className="option-container">
          <label htmlFor="options">Select an option:</label>
          <select
            id="options"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {Object.keys(data).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="custom-text-container">
          <label htmlFor="customText">Custom Text:</label>
          <input
            id="customText"
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
          />
        </div>
        <div className="amount-container">
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="preview-container">
          <h2>Preview:</h2>
          <textarea
            rows="5"
            cols="40"
            value={`${predefinedText} ${customText} ${data[
              selectedOption
            ].value.join(", ")}`}
            readOnly
          />
          <button onClick={handleCopyClick}>Copy to Clipboard</button>
        </div>
        <div className="total-container">
          <h2>Total:</h2>
          <p>{calculateTotal()}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
