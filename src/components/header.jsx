export default function Header({ score, bestScore }) {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
      }}
    >
      <div>
        <h1
          style={{
            fontSize: '30px',
            color: ' #ffcb05',
            textShadow: '2px 2px #2a75bb,4px 4px #2a75bb',
          }}
        >
          PokeFlip
        </h1>

        <p style={{ color: '#ffcb05', fontSize: '16px' }}>
          Get points by clicking on an image but don't click on any more than once!
        </p>
      </div>
      <div
        style={{
          color: 'white',
          fontSize: '14px',
        }}
      >
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
      </div>
    </header>
  );
}
