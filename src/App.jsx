import React from 'react';

const messages = [
  'Learn React ⚙️',
  'Apply For Jobs 🌟',
  'Invest Your New Income 😃',
];

const App = () => {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="step-1 active">1</div>
        <div className="step-2">2</div>
        <div className="step-3">3</div>
      </div>

      <p className="message">Hello</p>
      <div className="buttons">
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          className="previous"
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          className="next"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
