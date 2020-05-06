import React from 'react';
import UserSavedCoffeeCard from '../Components/UserSavedCoffeeCard';

class UserSavedCoffeeContainer extends React.Component {

    checkVegan(data) {
        return data.every(i => i.vegan)
    }
    
    renderUserCoffee() {
        return this.props.user.recipes.map((recipe, i ) => 
        < UserSavedCoffeeCard key={i} 
        id={recipe.id} 
        name={recipe.name} 
        selectCoffee={this.props.selectCoffee} 
        ingredients={recipe.ingredients}
        image1={"https://img.icons8.com/clouds/100/000000/kawaii-coffee.png"} 
        image2={"https://img.icons8.com/bubbles/100/000000/kawaii-coffee.png"}
        vegan={this.checkVegan(recipe.ingredients)}/> )
    }

    render() {
        return(
        <div className='containerRec'>   
            {this.renderUserCoffee()}
        </div>
        )
        
    }
}

export default UserSavedCoffeeContainer;