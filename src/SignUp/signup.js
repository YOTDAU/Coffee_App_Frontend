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
        if (this.state.password !== this.state.passwordConfirmation) {
            alert("User could not be created")
        }
        API.post("users", this.state).then(() => this.props.history.push('/sign-in'))
    }

    render() {
        return(
            <div>Hello from SignUp
            <form onSubmit={this.handleSubmit}>
                <lable>Username: </lable>
                <input type='text' name='name' onChange={this.handleChange}/><br/>
                <label>Email:</label>
                <input type="email" name="email" onChange={this.handleChange}/><br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange}/><br/>
                <label>Password Confirmation:</label>
                <input type="password" name="password_confirmation" onChange={this.handleChange}/><br/>

                <input type="submit" value="Sign Up"/>
            </form>
            </div>
        )
    }
}

export default SignUpComponent;