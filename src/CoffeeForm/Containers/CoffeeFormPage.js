import React from 'react'
import { Link } from "react-router-dom"
import QRCode from 'qrcode.react'

import API from '../../API'
import CategoryContainer from './CategoryContainer'
import IngredientsContainer from './IngredientsContainer'
import UserRecipeContainer from './UserRecipeContainer'


class CoffeeFormPage extends React.Component {

    constructor(){
        super()
        this.state = {
            categories: [],
            selectedCategoryId: 1,
            userIngredients: []
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
        return this.state.categories.find( c => c.id == this.state.selectedCategoryId )
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
        return <QRCode value={data} size={250} color='black' backgroundColor='white' />
    }

    render() {

        return this.selectedCategory() 
        ? (
            <div>   
                <div>Hello from CoffeeFromPage</div>
                <CategoryContainer categories={this.state.categories} selectedCategoryId={this.state.selectedCategoryId} selectCategory={this.selectCategory} />
                <IngredientsContainer selectedCategory={ this.selectedCategory()} selectIngredient={this.selectIngredient} />
                <UserRecipeContainer userIngredient={this.state.userIngredients} removeIngredinet={this.removeIngredinet}/>
                <button onClick={() => this.generateQRCode("google.com")}>Generate QR</button>
            </div>
        )
        : null
       
    }
}

export default CoffeeFormPage