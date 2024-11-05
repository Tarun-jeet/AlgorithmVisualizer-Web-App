import React from 'react';
import BubbleSort from '../components/BubbleSort';
import MergeSort from '../components/MergeSort';
import InsertionSort from '../components/InsertionSort';
import './SortAlgorithms.css';

function SortAlgorithms() {
  return (
    <div className="algorithms-page">
      <h2 className="page-title">Sorting Algorithms Visualization</h2>
      <p className="page-intro">
        Dive into the visual representations of some of the most fundamental sorting algorithms. Each algorithm showcases its unique steps and performance.
      </p>
      
      <div className="algorithm-section">
        <h3>Bubble Sort</h3>
        <p className="algorithm-description">Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</p>
        <BubbleSort />
      </div>
      
      <div className="algorithm-section">
        <h3>Merge Sort</h3>
        <p className="algorithm-description">Merge Sort is a divide-and-conquer algorithm that splits the list into halves, sorts each half, and merges them back together in sorted order.</p>
        <MergeSort />
      </div>
      
      <div className="algorithm-section">
        <h3>Insertion Sort</h3>
        <p className="algorithm-description">Insertion Sort builds the sorted array one item at a time, inserting each element into its correct position relative to the already sorted part.</p>
        <InsertionSort />
      </div>
    </div>
  );
}

export default SortAlgorithms;
