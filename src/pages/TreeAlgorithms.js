import React from 'react';
import BFSVisualization from '../components/BinarySearchTree';
import './TreeAlgorithms.css';

function TreeAlgorithms() {
  return (
    <div className="algorithms-page">
      <h2 className="page-title">Tree Algorithms Visualization</h2>
      <p className="page-intro">
        Explore tree traversal algorithms with visualizations designed to make the concept clearer. Tree algorithms are essential in organizing hierarchical data structures.
      </p>

      <div className="algorithm-section">
        <h3>Breadth-First Search (BFS)</h3>
        <p className="algorithm-description">
          BFS is a traversal algorithm that explores nodes level by level, making it ideal for finding the shortest path on an unweighted tree or graph.
        </p>
        <BFSVisualization />
      </div>
    </div>
  );
}

export default TreeAlgorithms;
