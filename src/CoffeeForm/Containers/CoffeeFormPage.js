import React from 'react'
import QRCode from 'qrcode.react'
// import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


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
            userIngredients: this.state.userIngredients.filter(i => i.id !== ingredient)
        })
    }

    generateQRCode(data) {
        let q = data.map(data => {return data.name})
        let qr = JSON.stringify(q)
        this.setState({ qrCode: qr })
    }

    handleSerachChange = event => {
        this.setState({searchTerm: event.target.value})
        console.log(this.state)
    }

    render() {

        return this.selectedCategory() 
        ? (
            <div>   
                <h3>Ingredient Categories</h3>
                    <CategoryContainer categories={this.state.categories} selectedCategoryId={this.state.selectedCategoryId} selectCategory={this.selectCategory} />
                    <IngredientsContainer selectedCategory={ this.selectedCategory()} selectIngredient={this.selectIngredient} />
                <h3>Your Recipe!</h3>
                <Grid container justify="center" >
                    <NameSaveForm userIngredients={this.state.userIngredients}/>
                </Grid>
                <UserRecipeContainer userIngredient={this.state.userIngredients} removeIngredinet={this.removeIngredinet}/><br></br>
                <Grid container justify="center"><br></br>
                    <Button variant="contained" onClick={() => this.generateQRCode(this.state.userIngredients)}>Generate QR</Button><br></br><br></br>
                    </Grid>
                    {
                        this.state.qrCode
                        ?
                        <div style={{display:"flex", justifyContent: "center", alignItems:"center", marginTop: 25}}>
                            <QRCode value={this.state.qrCode} />
                        </div>
                        : null
                    }
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            </div>
        )
        : null
       
    }
}

export default CoffeeFormPage
