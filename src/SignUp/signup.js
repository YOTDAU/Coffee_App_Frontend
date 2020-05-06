import React from 'react';
import API from '../API';


class SignUpComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        // console.log(this.state)
        if (this.state.password !== this.state.passwordConfirmation) {
            alert("User could not be created")
        }
        return API.post("users", {
            user: {
                email: this.state.email,
                name: this.state.name,
                password: this.state.password
            }
        }).then(() => this.props.history.push('/signin'))
    }

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <lable>Username: </lable>
                <input type='text' name='name' onChange={this.handleChange}/><br/>
                <label>Email:</label><br></br>
                <input type="email" name="email" onChange={this.handleChange}/><br/>
                <label>Password:</label><br></br>
                <input type="password" name="password" onChange={this.handleChange}/><br/>
                <label>Password Confirmation:</label>
                <input type="password" name="passwordConfirmation" onChange={this.handleChange}/><br/>

                <button type="submit" value="Sign Up">Sign up</button>
            </form>
            </div>
        )
    }
}

export default SignUpComponent;