import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2 className="home-title">Welcome to Algorithm Visualizer</h2>
      <p className="home-intro">
        Hi, I'm Tarunjeet Singh, a student passionate about Data Structures and Algorithms (DSA). 
        I created this website to make it easier for others to understand and visualize the inner workings of various algorithms.
      </p>
      <p className="home-description">
        This platform currently showcases some key DSA visualizations, and I'm continuously working on adding more algorithms and features to enhance the learning experience. Stay tuned for more updates and new visualizations in the future!
      </p>
    </div>
  );
}

export default Home;
