import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Container, Snackbar } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(4),
    },
    textField: {
        margin: theme.spacing(1),
        width: '25ch',
    },
    button: {
        margin: theme.spacing(2),
    },
}));

function CreateUser() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { name, email, phone, address };
        axios.post('http://localhost:8080/api/employees/create', user)
            .then(response => {
                console.log(response);
                if (response.status === 201) {
                    setOpen(true);
                    navigate('/list');
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Create User
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.textField}
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    className={classes.textField}
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    className={classes.textField}
                    label="Phone"
                    variant="outlined"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
                <TextField
                    className={classes.textField}
                    label="Address"
                    variant="outlined"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <Button className={classes.button} variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="User created successfully!"
            />
        </Container>
    );
}

export default CreateUser;