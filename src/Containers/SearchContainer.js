import React from 'react';
import RecipeCard from '../Components/RecipeCard';
import InfiniteScroll from 'react-infinite-scroller';


class SearchContainer extends React.Component {


    generateQRCode(data) {
        let q = data.map(data => {return data.name})
        let qr = JSON.stringify(q)
        this.setState({ qrCode: qr })
    }

    checkVegan(data) {
        return data.every(i => i.vegan)
    }

    renderRecipes() {
        return this.props.allRecipes.map((recipe, i) => 
        <RecipeCard  key={i} 
        id={recipe.id} 
        name={recipe.name} 
        user={recipe.user.name} 
        selectCoffee={this.props.selectCoffee} 
        ingredients={recipe.ingredients} 
        image1={"https://img.icons8.com/carbon-copy/100/000000/coffee-to-go.png"} 
        image2={"https://img.icons8.com/plasticine/100/000000/coffee-to-go.png"}
        vegan={this.checkVegan(recipe.ingredients)}/>)
    }

    render() {
        return(

            <InfiniteScroll
                    pageStart={0}
                    // loadMore={loadFunc}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}>Loading ...</div>}>
                    {this.renderRecipes()}
            </InfiniteScroll>
        // <div className='searchContainer'>
        //     {this.renderRecipes()}
        // </div>
        )
    }
}

export default SearchContainer;