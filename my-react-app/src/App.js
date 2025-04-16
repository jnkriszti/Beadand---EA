import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blackjack from './components/Blackjack';
import RockPaperScissors from './components/RockPaperScissors';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/blackjack">Blackjack</Link></li>
            <li><Link to="/rock-paper-scissors">Kő-Papír-Olló</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/blackjack" element={<Blackjack />} />
          <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
