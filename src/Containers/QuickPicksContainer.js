import React from 'react';
import RecipeCard from '../Components/RecipeCard';

class QuickPickContainer extends React.Component {


    generateQRCode(data) {
        let q = data.map(data => {return data.name})
        let qr = JSON.stringify(q)
        this.setState({ qrCode: qr })
    }

    checkVegan(data) {
        return data.every(i => i.vegan)
    }
    
    renderPicks() {
        return this.props.allRecipes.slice(0, 11).map((recipe, i) => 
        <RecipeCard  key={i} 
        id={recipe.id} 
        name={recipe.name} 
        user={recipe.user.name} 
        selectCoffee={this.props.selectCoffee} 
        ingredients={recipe.ingredients} 
        image1={"https://img.icons8.com/carbon-copy/100/000000/coffee-to-go.png"} 
        image2={"https://img.icons8.com/plasticine/100/000000/coffee-to-go.png"}
        vegan={this.checkVegan(recipe.ingredients)}/>)
    }

    render() {
        return(
        <div className='containerRec'>
            {this.renderPicks()}
        </div>
        )
    }
}

export default QuickPickContainer;