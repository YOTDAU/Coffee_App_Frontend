import React from "react"
import Card from '@material-ui/core/Card';

const IngredientCard = ({name, description, selectIngredient, ingredient, image, vegan}) => {

    return(
            <Card className='cardIng' varianet="outlined" onClick={() => selectIngredient(ingredient)}>
                    <h3>{name}</h3>
                    <img className='icons' src={image} />
                    <p>{description}</p>
            </Card>
        ) 
    }

export default IngredientCard