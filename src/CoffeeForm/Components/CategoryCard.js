import React from "react"

const CategoryCard =({ id, name, selectCategory}) => {

    return(
        <div onClick={ () => selectCategory(id)}>
            <h1>{name}</h1>
            <p></p>
            <p>Category Card</p>
        </div>
    )
}

export default CategoryCard