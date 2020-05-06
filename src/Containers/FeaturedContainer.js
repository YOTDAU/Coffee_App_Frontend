import React from 'react';
import RecipeCard from '../Components/RecipeCard';

class FeaturedContainer extends React.Component {
  
    renderPicks() {
        return this.props.allRecipes.slice(0, 4).map((recipe, i) => 
        <RecipeCard  key={i} id={recipe.id} name={recipe.name} user={recipe.user.name} selectCoffee={this.props.selectCoffee} ingredients={recipe.ingredients} />)
    }

    checkVegan(data) {
        return data.every(i => i.vegan)
    }
 

    getRandom(array) {
        let shuffle = array.sort(() => 0.5 - Math.random());
        return shuffle.slice(0, 7).map((recipe, i) => 
        <RecipeCard  
        key={i}
        id={recipe.id} 
        name={recipe.name} 
        user={recipe.user.name} 
        selectCoffee={this.props.selectCoffee} 
        ingredients={recipe.ingredients} 
        image1={"https://img.icons8.com/small/50/000000/kawaii-coffee.png"} 
        image2={"https://img.icons8.com/nolan/50/kawaii-coffee.png"}
        vegan={this.checkVegan(recipe.ingredients)}/>)
    }

    render() {
        return(
        <div className='containerRec'>
            {this.getRandom(this.props.allRecipes, 4)}
        </div>
        )
    }
}

export default FeaturedContainer;