import React from 'react';
import CategoryCard from '../Components/CategoryCard'



class CategoryContainer extends React.Component {
    

    renderCategories() {
        return this.props.categories.map((category, i ) => 
        <CategoryCard 
        key={i} 
        name={category.name} 
        id={category.id}
        ingredients={category.ingredients}  
        selectCategory={this.props.selectCategory}
        />)
    }

    render() {
        return(
        <div>
            Categories Container
            {this.renderCategories()}
        </div>
        )
    }
}

export default CategoryContainer;