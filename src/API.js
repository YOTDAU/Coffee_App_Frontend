const baseURL = 'http://localhost:3000'
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`
const userRecipesURL = `${baseURL}/user-recipes`
const categoriesURL = `${baseURL}/categories`


const post = (url, body) => {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(body)
    }
    return fetch(url, configurationObject)
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

const signIn = (data) => post(signInURL, data)
    .then(response => response.json())

const getRecipes = (token) => {
    return get(userRecipesURL, token).then(response => response.json())
} 

const getCategories = () => {
    return getNoToken(categoriesURL).then(response => response.json())
} 




export default { signIn, validate, getRecipes, getCategories, getNoToken }
