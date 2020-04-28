import React from 'react';
import API from '../API'
import BrewingButton from '../Components/BrewingButton'
import RecipesContainer from '../Containers/RecipesContainer'
import Search from '../Components/Search'


class LandingComponent extends React.Component {

    constructor() {
        super()
        this.state = {
                name: null,
                email: null,
                allRecipes: [], 
                searchTerm: "",
        }
    }

    // works for returning only user saved recipies
    componentDidMount() {
        if (localStorage.token) {
            API.getRecipes(localStorage.token)
            .then(json => this.setState({user: json}))
        } 
        API.getRecipesNoToken()
            .then(data => this.setState({allRecipes: data}))
        
    }

    // componentDidMount() {
    //     API.getRecipesNoToken()
    //         .then(data => this.setState({allRecipes: data}))
    // }

    handleSerachChange = event => {
        this.setState({searchTerm: event.target.value})
    }
    
    filterRecipes = () => {
        const {searchTerm, allRecipes} = this.state
        return allRecipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }    

    render() {
        return(
            <div>
                <h2>Hello from landing</h2>
                <BrewingButton></BrewingButton>
                <Search searchTerm={this.state.searchTerm} onChange={this.handleSerachChange}/>
                <RecipesContainer allRecipes={this.filterRecipes()}/>
                <h3>Your Coffees!</h3>
            </div>

        )
    }
}

export default LandingComponent;