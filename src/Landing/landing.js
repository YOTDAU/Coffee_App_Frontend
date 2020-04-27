import React from 'react';
import API from '../API'
import BrewingButton from '../Components/BrewingButton'


class LandingComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            user: {
                name: null,
                email: null,
                recipes: []                
            }
        
        }
    }

    componentDidMount() {
        if (localStorage.token) {
            API.getRecipes(localStorage.token)
            .then(json => this.setState({user: json}))
        } //else get quick picks and get most popular
        
    }

    renderRecipes = () => {
        console.log(this.state)
            return this.state.user.recipes.map((recipe, i) => 
                <div key={i}>
                    <h5>{recipe.id} - {recipe.name} - {recipe.ingredients[0].name}</h5> 
                </div>
                )
        }

    render() {
        return(
            <div>
                <h2>Hello from landing</h2>
                <BrewingButton></BrewingButton>
                <h3>Your Coffees!</h3>
                {this.renderRecipes()}
            </div>

        )
    }
}

export default LandingComponent;