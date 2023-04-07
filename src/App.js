import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'tachyons';
import CardList from './component/CardList';
import SearchBox from './component/SearchBox';
import Scroll from './component/Scroll';
import './App.css';
import { setSearchField, requestRobots } from './action.js';

const mapStateToProps = (state) => {
  return {
    searchField: state.SearchRobots.searchField,
    Robots: state.RequestRobots.Robots,
    isPending: state.RequestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Searching: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {
  
  componentDidMount(){
    this.props.onRequestRobots();
  }

  
  render(){
    const { Searching, Robots, searchField} = this.props

    const filtering = Robots.filter(robots=>{
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (Robots.length === 0)
    {
      return <h1>Loading</h1>
    }
    else
    {
      return(
        <div className='tc'>
          <h1 className='f1'>Robot Friens</h1>
          <SearchBox SearchChange={Searching}/>
          <Scroll>
            <CardList robots={filtering}/>
          </Scroll>
          
        </div>
      ) 
    }
  
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);

