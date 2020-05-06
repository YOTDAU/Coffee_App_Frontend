import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const UserRecipeCard = ({name, removeIngredinet, id, vegan}) => {

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
          fontSize: 14,
          alignContent: 'center' 
        },
        pos: {
          marginBottom: 20,
        },
      });
      
        const classes = useStyles();
        // const bull = <span className={classes.bullet}>•</span>;

    return(
        <Grid spacing={1} style={{padding:5}} >
            <Card className={classes.root} varianet="outlined" onClick={() => removeIngredinet(id)}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <h3>{name}</h3>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        ) 
    }

export default UserRecipeCard