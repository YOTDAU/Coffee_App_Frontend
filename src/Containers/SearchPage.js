import React from 'react'
import API from '../API' 
// import RecipeContainer from './RecipesContainer'
import SearchContainer from './SearchContainer'
import Search from '../Components/Search'


class SearchPage extends React.Component {

    constructor() {
        super() 
        this.state = {
            allRecipes: [],
            searchTerm: ""
        }
    }

    componentDidMount() {
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

    render() {
        return (
            <div className="searchContainer" >
                <Search searchTerm={this.state.searchTerm} onChange={this.handleSearchChange}/>
                <SearchContainer allRecipes={this.filterRecipes()}/>
            
            </div>
        )
    }
}

export default SearchPage