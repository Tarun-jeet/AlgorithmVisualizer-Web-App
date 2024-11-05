import React, { useState } from 'react';
import './AlgorithmVisualization.css';

function InsertionSort() {
  const [array, setArray] = useState([11, 24, 20, 19, 22, 12, 15, 5, 3, 8, 6, 7, 4]);
  const [isSorting, setIsSorting] = useState(false);

  const handleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        setArray([...arr]);
        j--;
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }
    setIsSorting(false);
  };

  const maxVal = Math.max(...array);
  const heightScale = 200 / maxVal; 

  return (
    <div className="algorithm-container">
      <button onClick={handleSort} disabled={isSorting}>Start</button>
      <div className="array-container">
        {array.map((value, index) => (
          <div key={index} className="array-bar" style={{ height: `${value * heightScale}px` }}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsertionSort;
