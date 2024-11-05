import React, { useState, useEffect } from 'react';
import './AlgorithmVisualization.css';

const initialTree = [
  { value: 50, x: 300, y: 20 },
  { value: 30, x: 200, y: 100 },
  { value: 70, x: 400, y: 100 },
  { value: 20, x: 150, y: 180 },
  { value: 40, x: 250, y: 180 },
  { value: 60, x: 350, y: 180 },
  { value: 80, x: 450, y: 180 },
];

function BinarySearchTree() {
  const [queue, setQueue] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && queue.length > 0 && !isPaused) {
      interval = setInterval(() => {
        setQueue((prevQueue) => {
          if (prevQueue.length === 1) {
            setIsRunning(false);
            return [];
          }
          return prevQueue.slice(1);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, queue, isPaused]);

  const handleStartBFS = () => {
    setQueue([...initialTree]); // Start BFS with initial tree nodes
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="algorithm-container">
      <h3>Binary Search Tree - BFS Visualization</h3>
      <button onClick={handleStartBFS} disabled={isRunning}>
        Start BFS
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      <div className="tree-container">
        {initialTree.map((node, index) => (
          <div
            key={index}
            className={`node ${queue[0]?.value === node.value ? 'active' : ''}`}
            style={{ left: node.x, top: node.y }}
          >
            {node.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BinarySearchTree;
