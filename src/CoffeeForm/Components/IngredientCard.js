import React from "react"

const IngredientCard = ({name, description, selectIngredient, ingredient}) => {
    return(
        <div onClick={() => selectIngredient(ingredient)}>
            <h6>hello from ingredient card</h6>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        ) 
    }

export default IngredientCard