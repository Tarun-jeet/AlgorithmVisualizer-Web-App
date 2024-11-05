import React, { useState } from 'react';
import './AlgorithmVisualization.css';

function MergeSort() {
  const [array, setArray] = useState([11, 24, 20, 19, 22, 12, 15, 5, 3, 8, 6, 7, 4]);
  const [isSorting, setIsSorting] = useState(false);

  const mergeSort = async (arr) => {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = await mergeSort(arr.slice(0, middle));
    const right = await mergeSort(arr.slice(middle));
    return merge(left, right);
  };

  const merge = async (left, right) => {
    let result = [];
    let l = 0, r = 0;
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    result = [...result, ...left.slice(l), ...right.slice(r)];
    setArray(result);
    await new Promise((resolve) => setTimeout(resolve, 300));
    return result;
  };

  const handleSort = async () => {
    setIsSorting(true);
    const sortedArray = await mergeSort(array);
    setArray(sortedArray);
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

export default MergeSort;
