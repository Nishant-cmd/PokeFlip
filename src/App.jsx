import { useState } from 'react';
import Header from './components/header';
import CardBoard from './components/pokemonBoard';
import './style/index.css';
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGame] = useState(false);

  return (
    <>
      {gameOver
        ? alert('Game Over ! You selected the previously selected card. Reload the game')
        : ''}
      <Header score={score} bestScore={bestScore} />
      <CardBoard
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore}
        setGame={setGame}
      />
    </>
  );
}

export default App;
