import React from 'react'
import QRCode from 'qrcode.react'

import API from '../../API'
import CategoryContainer from './CategoryContainer'
import IngredientsContainer from './IngredientsContainer'
import UserRecipeContainer from './UserRecipeContainer'
import NameSaveForm from '../Components/NameSaveForm'


class CoffeeFormPage extends React.Component {

    constructor(){
        super()
        this.state = {
            categories: [],
            selectedCategoryId: 1,
            userIngredients: [],
            qrCode: null,
            name: null,
            searchTerm: ''
        }
    }

    componentDidMount() {
        API.getCategories()
            .then(data => this.setState({
                categories: data
            }))
       
    }

    selectCategory = (category) => {
        this.setState({
            selectedCategoryId: category
        })
    }

    clearSelectedCategory = () => {
        this.setState({
            selectedCategoryId: null
        })
    }

    selectedCategory = () => {
        return this.state.categories.find( c => c.id === this.state.selectedCategoryId )
    }

    selectIngredient = (ingredient) => {
        this.setState({userIngredients: [...this.state.userIngredients, ingredient]})
    }

    removeIngredinet = (ingredient) => {
        this.setState({
            userIngredients: this.state.userIngredients.filter(i => i !== ingredient)
        })
    }

    generateQRCode(data) {
        let q = data.map(ingredient => {return ingredient.name})
        let qr = JSON.stringify(q)
        this.setState({ qrCode: qr })
    }

    handleSerachChange = event => {
        this.setState({searchTerm: event.target.value})
        console.log(this.state)
    }

    // filteredRecipes = () => {
    //     const {}
    // }

    render() {

        return this.selectedCategory() 
        ? (
            <div>   
                <div>Hello from CoffeeFromPage</div>
                <CategoryContainer categories={this.state.categories} selectedCategoryId={this.state.selectedCategoryId} selectCategory={this.selectCategory} />
                <IngredientsContainer selectedCategory={ this.selectedCategory()} selectIngredient={this.selectIngredient} />
                <NameSaveForm userIngredients={this.state.userIngredients}/>
                <UserRecipeContainer userIngredient={this.state.userIngredients} removeIngredinet={this.removeIngredinet}/>
                <button onClick={() => this.generateQRCode(this.state.userIngredients)}>Generate QR</button><br></br><br></br>
                {
                    this.state.qrCode
                    ? <QRCode value={this.state.qrCode} />
                    : null
                }
            </div>
        )
        : null
       
    }
}

export default CoffeeFormPage