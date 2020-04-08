import React from 'react';
import axios from 'axios';
import CardList from './components/CardList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      myGithub: [],
      githubFollowers:[]
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/Jesuscarrillo179")
    .then(response => {
      this.setState({
        myGithub: response.data
      })
    })
    axios.get("https://api.github.com/users/Jesuscarrillo179/followers")
    .then(response => {
      console.log(response)
      this.setState({
        githubFollowers: response.data,
      })
    })
  }

  render(){
    return (
      <div className="App">
        <CardList myGithub={this.state.myGithub} githubFollowers={this.state.githubFollowers}/>
      </div>
    );
  }
}

export default App;
