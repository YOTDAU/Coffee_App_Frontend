import React from 'react'

const Search = props => {

    return(
        <div>
            <input 
                onChange={props.onChange}
                value={props.searchTerm}
                placeholder="search for coffees">
            </input>
        </div>
    )
}

export default Search