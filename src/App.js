import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
      <GameBoard score={score} bestScore={bestScore} setScore={setScore} setBestScore={setBestScore}></GameBoard>
    </div>
  );
}

export default App;
