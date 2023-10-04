import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu as MenuIcon, Create as CreateUserIcon, List as ListIcon } from '@material-ui/icons';
import CreateUser from './CreateUser';
import UserList from './UserList';
import Home from './Home';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', width: '100%', backgroundColor: '#f2f2f2', padding: '10px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={toggleDrawer(true)} style={{ marginRight: '10px' }}>
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
          </div>
        </nav>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} style={{ transform: `translateX(${drawerOpen ? '0' : '-250px'})`, transition: 'transform 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97)' }}>
          <div style={{ width: '250px', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', height: '100vh'}}>
            <List>
              <ListItem button component={Link} to="/create" onClick={toggleDrawer(false)}>
                <ListItemIcon><CreateUserIcon /></ListItemIcon>
                <ListItemText primary="Create User" />
              </ListItem>
              <ListItem button component={Link} to="/list" onClick={toggleDrawer(false)}>
                <ListItemIcon><ListIcon /></ListItemIcon>
                <ListItemText primary="List Users" />
              </ListItem>
            </List>
          </div>
        </Drawer>

        <div style={{ width: '70%', marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/list" element={<UserList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;