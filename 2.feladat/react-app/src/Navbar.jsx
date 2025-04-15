export default function Navbar({ onSelect }) {
    return (
      <nav style={{ marginBottom: '1rem' }}>
        <button onClick={() => onSelect('color')}>🎨 Color Picker</button>
        <button onClick={() => onSelect('timer')}>⏱ Timer</button>
      </nav>
    );
  }
  