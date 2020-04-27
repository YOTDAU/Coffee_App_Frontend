import React from 'react'
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
            userIngredients: [],
            qrCode: null,
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
        let qr = JSON.stringify(data)
        // alert(qr)
        this.setState({ qrCode: qr })
        
        // return <QRCode value={qr} />

    }

    render() {

        return this.selectedCategory() 
        ? (
            <div>   
                <div>Hello from CoffeeFromPage</div>
                <CategoryContainer categories={this.state.categories} selectedCategoryId={this.state.selectedCategoryId} selectCategory={this.selectCategory} />
                <IngredientsContainer selectedCategory={ this.selectedCategory()} selectIngredient={this.selectIngredient} />
                <UserRecipeContainer userIngredient={this.state.userIngredients} removeIngredinet={this.removeIngredinet}/>
                <button onClick={() => this.generateQRCode(this.state.userIngredients)}>Generate QR</button>
                {
                    this.state.qrCode
                    ? <QRCode value={this.state.qrCode} />
                    : null
                }
                {/* <QRCode value={JSON.stringify(this.state.userIngredients)} /> */}
            </div>
        )
        : null
       
    }
}

export default CoffeeFormPage