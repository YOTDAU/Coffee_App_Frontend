import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import SignInFormComponent from './SignIn/signIn'
import SignUpComponent from './SignUp/signup'
import LandingComponent from './Landing/landing'
import CoffeeFormPage from './CoffeeForm/Containers/CoffeeFormPage'
import API from './API'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: null,
    }
  }

  componentDidMount() {
    // If we have a token in localStorage, attempt to use it to validate ourselves against the server
    if (localStorage.token) {
      API.validate(localStorage.token)
      // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.name, json.token))
    }
  }

  signIn = (name, token) => {
    this.setState({
      name:name
    })
    localStorage.setItem('token', token)
  }

  signOut = () => {
    this.setState({
      name: null
    })
    localStorage.removeItem("token")
  }

render(){
  return (
    <div>
      <NavBar signOut={this.signOut}/> {this.state.name ? <h3>{this.state.name} logged in</h3> : <h3>Not logged in</h3>}
      <br></br>
      <Route exact path="/signin" component={ (props) => <SignInFormComponent {...props} signIn={this.signIn}/>}></Route>
      <Route exact path="/register" component={SignUpComponent}></Route>
      <Route exact path="/landing" component={ (props) => <LandingComponent {...props} />}></Route>
      <Route exact path="/coffee-maker" component={CoffeeFormPage}></Route>
      {/* <Search username={this.state.name}/> */}
    </div>
    );
  }
}

  

export default App;
