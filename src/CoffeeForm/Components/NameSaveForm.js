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
        if(this.state.ingredients.length == 0){
            alert("Gotta put something in!")
            return false
        }
        
        if(localStorage.token == null) {
            alert("You must be logged in to save!")
            return false
        }
        API.authorisedFetch("/recipe_ingredients", "POST", this.state).then(() => alert("Successful!"))
    }


    render() {
        return (
            
            <form onSubmit={this.handleSubmit} className="nameForm">  
                <input className='nameInput' placeholder="Name your Coffee" type="text" required onChange={this.handleInputChange}></input>
                <button type="submit" value="Save Coffee" className="saveBtn" >Save</button>
            </form>
        )
    }

}

export default NameSaveForm

