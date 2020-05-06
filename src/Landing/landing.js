import React from 'react';
import API from '../API'
import BrewingButton from '../Components/BrewingButton'
import RecipesContainer from '../Containers/RecipesContainer'
import Search from '../Components/Search'
import UserSavedCoffeeContainer from '../Containers/UserSavedCoffeesContainer'
import QuickPickContainer from '../Containers/QuickPicksContainer'
import FeaturedContainer from '../Containers/FeaturedContainer';
import SearchPage from '../Containers/SearchPage';





class LandingComponent extends React.Component {

    constructor() {
        super()
        this.state = {
                user: null,
                name: null,
                email: null,
                allRecipes: [], 
                searchTerm: "",
                selectedCoffee: null
        }
    }

    componentDidMount() {
        if (localStorage.token) {
            API.getRecipes(localStorage.token)
            .then(json => this.setState({user: json}))
        } 
        API.getRecipesNoToken()
            .then(data => this.setState({allRecipes: data}))
        
    }

    handleSearchChange = event => {
        this.setState({searchTerm: event.target.value})
    }
    
    filterRecipes = () => {
        const {searchTerm, allRecipes} = this.state
        return allRecipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
    
    selectCoffee = (coffee) => {
        this.setState({ 
            selectedCoffee: coffee
        })
    }


    render() {
        return(
            <div>

                <BrewingButton></BrewingButton>
                    {
                        this.state.user ? 
                        <div>                
                            <h3>Your Recipes</h3>
                            <UserSavedCoffeeContainer user={this.state.user} selectCoffee={this.selectCoffee}/>
                        </div> 
                    : null
                    }
                <h3>Search</h3>
                    <Search searchTerm={this.state.searchTerm} onChange={this.handleSearchChange}/>
                    <RecipesContainer allRecipes={this.filterRecipes()} user={this.state.user} selectCoffee={this.selectCoffee}/>
                <h3>Quick Picks</h3>
                    <QuickPickContainer allRecipes={this.state.allRecipes}/>
                <h3>Most popular this week</h3>
                    <FeaturedContainer allRecipes={this.state.allRecipes}/>
            </div>

        )
    }
}

export default LandingComponent;