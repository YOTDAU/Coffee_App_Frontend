import React from "react"

const IngredientCard = ({name, description, selectIngredient, ingredient}) => {
    return(
        <div onClick={() => selectIngredient(ingredient)}>
            <p>hello from ingredient card</p>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        ) 
    }

export default IngredientCard