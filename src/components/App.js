import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import Sort from './Sort'

class App extends Component {

  constructor(){
    super()
    this.state = {
      currentHog: '',
      sortTerm: ''
    }
  }

  handleClick = (event) => {
    this.setState({currentHog: event.target.id})
  }

  changeSort = (event) => {
    this.setState({sortTerm: event.target.value})
    console.log(this.state.sortTerm)
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Sort changeSort={this.changeSort}/>
          <HogList sortTerm={this.state.sortTerm} currentHog={this.state.currentHog} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;
