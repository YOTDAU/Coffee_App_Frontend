import React from 'react';
import UserRecipeCard from '../Components/UserRecipeCard'


class UserRecipeContainer extends React.Component {
    
    renderUserCoffee(){
        return this.props.userIngredient.map((ingredient, i ) => 
        <UserRecipeCard 
        key={i}
        id={ingredient.id}
        name={ingredient.name} 
        description={ingredient.description} 
        vegan={ingredient.vegan} 
        removeIngredinet={this.props.removeIngredinet}/>)
    }

    render() {
        
        return this.props.userIngredient ? (
            
        <div>
            <h2>Hello from UserRecipeContainer container</h2>
            {this.renderUserCoffee()}
        </div>
        )
        : null 
    }
}

export default UserRecipeContainer;