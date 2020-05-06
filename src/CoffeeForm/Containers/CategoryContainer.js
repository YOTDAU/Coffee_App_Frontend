import React from 'react';
import CategoryCard from '../Components/CategoryCard'
// import { animated, useSpring } from "react-spring";
// import { useScroll } from "react-use-gesture";




class CategoryContainer extends React.Component {

    
    renderCategories() {
        return this.props.categories.map((category, i ) => 
        <CategoryCard 
        key={i} 
        name={category.name}
        image={category.image} 
        id={category.id}
        ingredients={category.ingredients}  
        selectCategory={this.props.selectCategory}
        className="card"
        />)
    }

    render() {
        return(
        <div className="containerCat"  >
            
            {this.renderCategories()}
        </div>
        )
    }
}

export default CategoryContainer;