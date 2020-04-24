import React from 'react';
import API from '../API'


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
            return this.state.user.recipes.map(recipe => 
                <div key={recipe.id}>
                    <h5>{recipe.id} - {recipe.name}</h5> 
                </div>
                )
        }

    render() {
        return(
            <div>
                <h2>Hello from landing</h2>
                {this.renderRecipes()}
            </div>

        )
    }
}

export default LandingComponent;