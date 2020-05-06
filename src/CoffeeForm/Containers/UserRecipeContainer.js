import React from 'react';
import UserRecipeCard from '../Components/UserRecipeCard'
// import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';







const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      flexDirection: 'row',

      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
        alignItems: 'center',
        color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

class UserRecipeContainer extends React.Component {


  veganContainer(data) {
    if (data.length > 0) {
      return data.every(i => i.vegan)
      }
    }
    
  
    
    renderUserCoffee(){
        return this.props.userIngredient.map((ingredient, i ) => 
        <UserRecipeCard 
        key={i}
        id={ingredient.id}
        name={ingredient.name} 
        description={ingredient.description} 
        vegan={ingredient.vegan} 
        removeIngredinet={this.props.removeIngredinet}
        selectCoffee={this.props.selectCoffee}
        />)
    }

    render() {
        
        return this.props.userIngredient ? (
            
        <div className={useStyles.root}>
          
            
            <br></br>
            <Grid spacing={1} style={{padding:5}} container>
              <GridList className={useStyles.gridList}>
                {this.renderUserCoffee()}
              </GridList>
            </Grid>
            {this.veganContainer(this.props.userIngredient) ? 
            <Grid container justify="center">
                <Card backgroundColor="#a3d141">
                  <CardContent>
                    This coffee is vegan!
                    </CardContent>
                </Card>
                <br></br>
            </Grid>
            
            : null} 
        </div>
        )
        : null 
    }
}

export default UserRecipeContainer;