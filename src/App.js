import React, { Component } from 'react';
import 'tachyons';
import CardList from './component/CardList';
import SearchBox from './component/SearchBox';
import Scroll from './component/Scroll';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(users=>this.setState(({robots: users})))
  }

  Searching = (event) => {
    
    this.setState({
      searchfield: event.target.value
    })
   
  }
  render(){
    const filtering = this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    if (this.state.robots.length === 0)
    {
      return <h1>Loading</h1>
    }
    else
    {
      return(
        <div className='tc'>
          <h1 className='f1'>Robot Friens</h1>
          <SearchBox SearchChange={this.Searching}/>
          <Scroll>
            <CardList robots={filtering}/>
          </Scroll>
          
        </div>
      ) 
    }
  
  }
}

export default App;
