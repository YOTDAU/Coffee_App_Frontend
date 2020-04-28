import React from 'react';
import RecipeCard from '../Components/RecipeCard';



class RecipesContainer extends React.Component {
    

    renderRecipes() {
        return this.props.allRecipes.map((recipe, i) => 
        <RecipeCard  key={i} name={recipe.name} user={recipe.user.name}/>)
    }

    render() {
        return(
        <div>
            Recipes Container
            {this.renderRecipes()}
        </div>
        )
    }
}

export default RecipesContainer;