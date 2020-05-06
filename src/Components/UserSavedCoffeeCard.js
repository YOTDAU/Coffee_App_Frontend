import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import InfoPopper from './InfoPopper'
import QrPopper from "./QrPopper";
import EcoIcon from '@material-ui/icons/Eco';





const UserSavedCoffeeCard =({ name, selectCoffee, id, ingredients, image1, image2, vegan }) => {

    const useStyles = makeStyles({
        root: {
          minWidth: 80,
          display: 'inline-block',
        //   flexDirection: 'row',
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 10,
          alignContent: 'center' 
        },
        pos: {
          marginBottom: 20,
        },
      });
      
        const classes = useStyles();
        // const bull = <span className={classes.bullet}>•</span>;

    return(
        <Grid spacing={1} style={{padding:5}} onClick={ () => selectCoffee(id) }>
            <Card className={classes.root} varianet="outlined">
                <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <h3>{name}</h3> 
                    <img src={image1}
                    onMouseOver={e => (e.currentTarget.src=image2)}
                    onMouseLeave={e => (e.currentTarget.src=image1)} 
                    />
                </Typography>
                <Grid container alignItems="flex-start" justify="flex-start" direction="row">

                <InfoPopper ingredients={ingredients}/>
                <QrPopper ingredients={ingredients}/>
                {vegan ? 
                      <Grid >
                        <EcoIcon fontSize="small"/>
                      </Grid> : null  
                    }
                </Grid>
                </CardContent>
            </Card> 
        </Grid>
    )

    
}

export default UserSavedCoffeeCard