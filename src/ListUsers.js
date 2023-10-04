import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Collapse, IconButton } from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  user: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    cursor: 'pointer', // add cursor pointer to indicate clickable
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

function ListUsers() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [expandedUser, setExpandedUser] = useState(null); // add state variable to keep track of expanded user

  useEffect(() => {
    fetch('http://localhost:8080/api/employees/all')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  const handleUserClick = (user) => {
    if (user === expandedUser) {
      setExpandedUser(null); // if clicked user is already expanded, collapse it
    } else {
      setExpandedUser(user); // otherwise, expand the clicked user
    }
  };

  const handleEditClick = (user) => {
    console.log(`Edit user ${user.id}`);
  };

  const handleDeleteClick = (user) => {
    console.log(`Delete user ${user.id}`);
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" gutterBottom>List Users</Typography>
      <Grid container spacing={3}>
        {users.map(user => (
          <Grid item xs={12} key={user.id}>
            <Paper className={classes.user} onClick={() => handleUserClick(user)}> {/* add onClick handler to user row */}
              <div>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="subtitle1">{user.email}</Typography>
                {expandedUser === user && ( // conditionally render phone and address based on expandedUser state
                  <>
                    <Typography variant="subtitle2">{user.phone}</Typography>
                    <Typography variant="subtitle2">{user.address}</Typography>
                  </>
                )}
              </div>
              <div>
                <IconButton onClick={() => handleEditClick(user)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteClick(user)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default ListUsers;