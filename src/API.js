const baseURL = 'https://coffee-brewstar-api.herokuapp.com/'
const validateURL = `${baseURL}/validate`
const userRecipesURL = `${baseURL}/user-recipes`
const categoriesURL = `${baseURL}/categories`
const recipesURL = `${baseURL}/recipes`
// const usersURL = `${baseURL}/users`



const post = (url, data) => {
    const configurationObject = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    return fetch(`${baseURL}/${url}`, configurationObject).then((res) =>
    res.json()
    )
}

const get = (url, token) => {
    return fetch(url, {
        headers: {
            "Authorization": token
        }
    })
}

const getNoToken = (url) => {
    return fetch(url, {
        headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json'
            }
        })
}

const validate = (token) => {
    return get(validateURL, token).then(response => response.json())
    }

const signIn = (data) => post("sign-in", data)

const getRecipes = (token) => {
    return get(userRecipesURL, token).then(response => response.json())
}

const getRecipesNoToken = () => {
    return getNoToken(recipesURL).then(response => response.json())
}

const getCategories = () => {
    return getNoToken(categoriesURL).then(response => response.json())
} 

    // Public


    // Private

    const authorisedFetch = (url, method, body) => {
        return fetch(baseURL + url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
            },
            body: JSON.stringify(body)
        })
    }

    // authorisedFetch('localhost:3000', 'POST', {data: [1, 2, 3]} )
    
export default { post, signIn, validate, getRecipes, getCategories, getNoToken, getRecipesNoToken, authorisedFetch }
