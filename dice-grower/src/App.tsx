import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greenhouse from './components/greenhouse/Greenhouse';
import Plant from './components/plant/Plant';
import Flower from './components/flower/Flower';
import FlowerModel from './models/FlowerModel';
import Storefront from './components/storefront/Storefront';

function App() {
  const flower: FlowerModel = new FlowerModel(3);
  return (
    <div className="App">
      <header className="App-header">
        <Flower flower={flower}/>
        <Greenhouse></Greenhouse>
        <Storefront></Storefront>
      </header>
    </div>
  );
}

export default App;
