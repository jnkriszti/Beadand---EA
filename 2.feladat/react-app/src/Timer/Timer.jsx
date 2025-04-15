import { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Timer</h2>
      <p style={{ fontSize: '2rem' }}>{seconds} s</p>
      <button onClick={() => setRunning(!running)}>
        {running ? '⏸ Pause' : '▶ Start'}
      </button>
      <button onClick={() => {
        setRunning(false);
        setSeconds(0);
      }}>🔁 Reset</button>
    </div>
  );
}
