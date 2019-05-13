import React from 'react';
import './App.css';
import axios from "axios"
import UserForm from "./components/UserForm"
class App extends React.Component{
  state={
    repos:null
  }
  getUser=(e)=>{
    e.preventDefault() 
    const user=e.target.elements.username.value
    //console.log(user)
    axios.get(`https://api.github.com/users/${user}`)
    .then((res)=>{
      //console.log(res)
      const repos=res.data.public_repos
      this.setState({repos:repos})
      console.log(repos)
    })

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser}/>
        {this.state.repos?<p>Number of repos :{this.state.repos}</p> : <p>Please enter username</p>}
      </div>
    );
  }
 
}

export default App;
