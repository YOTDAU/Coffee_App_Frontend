import React from 'react';
import RecipeCard from '../Components/RecipeCard';

class RecipesContainer extends React.Component {


    generateQRCode(data) {
        let q = data.map(data => {return data.name})
        let qr = JSON.stringify(q)
        this.setState({ qrCode: qr })
    }

    checkVegan(data) {
        return data.every(i => i.vegan)
    }
 
    renderRecipes() {
        return this.props.allRecipes.map((recipe, i) => 
        <RecipeCard  key={i} 
        id={recipe.id} 
        name={recipe.name} 
        user={recipe.user.name} 
        selectCoffee={this.props.selectCoffee} 
        ingredients={recipe.ingredients} 
        image1={"https://img.icons8.com/wired/64/000000/coffee.png"}
        image2={"https://img.icons8.com/dusk/64/000000/coffee.png"}
        vegan={this.checkVegan(recipe.ingredients)}/>)
    }

    render() {
        return(
        <div className='containerRec'>
            {this.renderRecipes()}
        </div>
        )
    }
}

export default RecipesContainer;