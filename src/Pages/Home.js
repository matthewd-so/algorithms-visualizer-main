import React from 'react';
import Card from '../components/Card';
import '../styles/home.css';
import img1 from '../icons/path-finding.png';
import img2 from '../icons/sort-algo.png';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <h2 className="page-title">Visualize Algorithms with Matthew</h2>

      <div className='cards-container'>
        <Link className='no_underline' to="/path-finding">
          <Card array={[img1, "Path Finder"]} />
        </Link>
        <Link className='no_underline' to="/sorting">
          <Card array={[img2, "Sorting Algorithms"]} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
