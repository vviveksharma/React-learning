import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [running]);

  const startStopHandler = () => {
    setRunning(prevRunning => !prevRunning)
  }

  const resetTimeHandler = () => {
    setTime(0);
    setRunning(false);
  }

  return (
    <div>
      <h1>StopWatch</h1>
      <div className='timer'>
        {time} seconds
      </div>
      <div className='controls'>
        <button onClick={startStopHandler}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={resetTimeHandler}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
