import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Toolbar, IconButton, Typography } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div className="homeCurrency__button">
          <Link style={{color: "white"}} to="/">
            <Button variant="contained" color="primary" className={classes.button}>
              Home
            </Button>
          </Link>
          <Link to="/OtherCurrency">
            <Button variant="contained" color="primary" className={classes.button}>
              Other Currency
            </Button>
          </Link>
          <Link to="About">
            <Button variant="contained" color="primary" className={classes.button}>
              About
            </Button>
          </Link>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);