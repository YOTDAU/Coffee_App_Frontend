import React from 'react';
import API from '../API'
import { Link } from "react-router-dom"



class SignInFormComponent extends React.Component {

    constructor(props){
        super()
        this.state = {
            name: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state)
        API.signIn(this.state)
            .then(json => this.props.signIn(json.name, json.token))
            .then(() => this.props.history.push("/landing"))
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <lable>Username: </lable>
                <input type='text' name='name' onChange={this.handleChange}/><br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange}/><br/>

                <input type="submit" value="Sign In"/>
            </form>
            
            <Link to="signup">Sign Up!</Link>
            </div>
        )
    } 
}

export default SignInFormComponent;