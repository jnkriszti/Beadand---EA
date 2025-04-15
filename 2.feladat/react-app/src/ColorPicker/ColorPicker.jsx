import { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('#ff69b4');

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div style={{
        marginTop: '1rem',
        width: '100px',
        height: '100px',
        backgroundColor: color,
        border: '2px solid #333',
        marginInline: 'auto',
      }} />
      <p>Selected color: {color}</p>
    </div>
  );
}
