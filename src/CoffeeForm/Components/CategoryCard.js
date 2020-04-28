import React from "react"

const CategoryCard =({ id, name, selectCategory}) => {

    return(
        <div onClick={ () => selectCategory(id)}>
            <h1>{name}</h1>
            <p></p>
            <h6>Category Card</h6>
        </div>
    )
}

export default CategoryCard