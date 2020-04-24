const baseURL = 'http://localhost:3000'
const signInURL = `${baseURL}/sign-in`
const validateURL = `${baseURL}/validate`
const userRecipesURL = `${baseURL}/user-recipes`


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

const validate = (token) => {
    return get(validateURL, token).then(response => response.json())
    }

const signIn = (body) => post(signInURL, body)
    .then(response => response.json())

const getRecipes = (token) => {
    return get(userRecipesURL, token).then(response => response.json())
} 


export default { signIn, validate, getRecipes }
