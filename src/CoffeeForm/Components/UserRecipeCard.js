import React from "react"

const UserRecipeCard = ({name, removeIngredinet, id}) => {
    return(
        <div onClick={() => removeIngredinet(id)}>
            <h3>{name}</h3>
        </div>
        ) 
    }

export default UserRecipeCard