import React from 'react';
// import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'





const BrewingButton = (props) => {
    return (
        <Grid container justify="center">
            <Button variant="contained"  href='/coffee-maker'>Start brewing!</Button>
        </Grid>
    )
}

export default BrewingButton

