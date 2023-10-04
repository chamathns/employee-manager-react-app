import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateUser from './CreateUser';
import ListUsers from './ListUsers';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create User</Link>
            </li>
            <li>
              <Link to="/list">List Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create" element={<CreateUser />} />
          <Route path="/list" element={<ListUsers />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;