import React, { useState } from 'react';
import Navbar from './Navbar';
import Timer from './Timer/Timer';
import ColorPicker from './ColorPicker/ColorPicker';

export default function App() {
  const [page, setPage] = useState('color');

  return (
    <div>
      <Navbar onSelect={setPage} />
      {page === 'color' && <ColorPicker />}
      {page === 'timer' && <Timer />}
    </div>
  );
}
