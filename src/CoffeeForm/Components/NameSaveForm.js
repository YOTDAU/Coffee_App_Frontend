import React from 'react'
import API from '../../API'

class NameSaveForm extends React.Component {

    constructor(){
        super()
        this.state = {
            name: null,
            ingredients: []
        }
    }

    handleInputChange = event => {
        event.preventDefault()
        const ingredientIds = this.props.userIngredients.map( ing => ing.id )

        this.setState({ 
            name : event.target.value,
            ingredients: ingredientIds
            
     })
    }

    handleSubmit = event => {
        event.preventDefault()
        API.authorisedFetch("/recipe_ingredients", "POST", this.state)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <input placeholder="Name your Coffee" type="text" onChange={this.handleInputChange}></input>
                <input type="submit" value="Save Coffee"/>
            </form>
        )
    }

}

export default NameSaveForm