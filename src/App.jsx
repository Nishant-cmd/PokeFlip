import { useState } from 'react';
import Header from './components/header';
import CardBoard from './components/pokemonBoard';
import './style/index.css';
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // function increaseScore() {
  //   setScore((prev) => prev + 1);
  // }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardBoard
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
