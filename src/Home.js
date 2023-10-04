import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import Image from './image.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#0077ff',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    color: '#333',
  },
  ctaButton: {
    padding: theme.spacing(2, 4),
    fontSize: '1.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#0077ff',
    color: '#fff',
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#0055cc',
    },
  },
  randomText: {
    fontSize: '1rem',
    marginBottom: theme.spacing(2),
    color: '#333',
  },
}));

function Home() {
  const classes = useStyles();

  const handleLearnMoreClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          {/* Remove the image tag */}
        </Grid>
        <Grid item xs={12} sm={6} container justify="center">
          <div className={classes.content}>
            <Typography variant="h1" className={classes.title}>
              Welcome to Our Website
            </Typography>
            <Typography variant="h2" className={classes.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            {[...Array(10)].map((_, index) => (
              <Typography key={index} variant="body1" className={classes.randomText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            ))}
            <Button variant="contained" className={classes.ctaButton} onClick={handleLearnMoreClick}>
              Learn More
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
