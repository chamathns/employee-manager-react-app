import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      maxWidth: '400px',
    },
  },
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
}));

/**
 * Renders a form to create a new user.
 * @returns {JSX.Element} The JSX element containing the form.
 */
function CreateUser() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    /**
     * Handles the form submission by creating a new user object and logging it to the console.
     * @param {Event} event - The form submission event.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { name, email, phone, address };
        console.log(newUser); // Replace with your own code to submit the new user
    };

    return (
        <div>
                <Paper className={classes.root}>
                        <Typography variant="h4" gutterBottom>Create User</Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                                <TextField label="Name" value={name} onChange={(event) => setName(event.target.value)} />
                                <TextField label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                <TextField label="Phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
                                <TextField label="Address" multiline value={address} onChange={(event) => setAddress(event.target.value)} />
                                <Button variant="contained" color="primary" type="submit">Create User</Button>
                        </form>
                </Paper>
        </div>
    );
}

export default CreateUser;