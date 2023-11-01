import { useEffect, useState } from 'react';
import Point from './core/point';
import Gameservices from './core/gameservices';
import Gamerepository from './core/gamerepository';

import PointComponent from './components/point';

import './App.css'

const gamerepository = new Gamerepository();
const gameservices = new Gameservices(gamerepository);

function App() {

  const [points, setPoints] = useState(gameservices.getPoints());
  
  function handleCLick(e: { clientX: number; clientY: number; }){
    const point = new Point(e.clientX, e.clientY);
    gameservices.insertPoint(point);
    const update = gameservices.getPoints();
    setPoints(update);
    console.log(update);
  }

  return (
    <div className='game-container' onClick={handleCLick}>
      {points.map((point, index) => (
        <PointComponent key={index} coordinates={point}></PointComponent>
      ))}
    </div>
  )
}

export default App
