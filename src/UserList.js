import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function UserList() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/employees/all')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const deleteUser = (name) => {
        axios.post(`http://localhost:8080/api/employees/delete?name=${name}`)
            .then(response => {
                console.log(response);
                setUsers(users.filter(user => user.name !== name));
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                User List
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/create"
                className={classes.button}
            >
                Create User
            </Button>
            <List>
                {users.map(user => (
                    <div className="user" key={user.id}>
                        <ListItem>
                            <ListItemText primary={user.name} secondary={user.email} />
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => deleteUser(user.name)}
                                className={classes.button}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                to={`/update/${user.id}`}
                                className={classes.button}
                            >
                                Update
                            </Button>
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    );
}

export default UserList;