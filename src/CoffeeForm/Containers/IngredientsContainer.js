import React from 'react';
import IngredientCard from '../Components/IngredientCard';



class IngredientsContainer extends React.Component {
    
    renderIngredients() {
        return this.props.selectedCategory.ingredients.map((ingredient, i) => <IngredientCard ingredient={ingredient} key={i} id={ingredient.id} name={ingredient.name} description={ingredient.description} selectIngredient={this.props.selectIngredient}/> ) 
    }

    render() {
        return(
        <div>
            {this.renderIngredients()}
        </div>
        )
    }
}

export default IngredientsContainer;