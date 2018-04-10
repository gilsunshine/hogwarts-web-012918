import React from 'react'
import PorkersData from '../porkers_data.js'
import Hog from './Hog'

class HogList extends React.Component{
  constructor(){
    super()
    this.state = {
      hogs: PorkersData
    }
  }

  setHogs = () => {
    let hogs = this.sortHogs()
    hogs = this.state.hogs.map(hog =>{
      if(hog.name === this.props.currentHog){
        return <Hog isCurrent={true} data={hog} name={hog.name} handleClick={this.props.handleClick}/>
      }else{
        return <Hog isCurrent={false} data={hog} name={hog.name} handleClick={this.props.handleClick}/>
      }
    })
    return hogs
  }

  sortHogs = () => {
    let hogs = [...this.state.hogs]
    if(this.props.sortTerm === 'name'){
      hogs.sort(hog => {
        hog.name
      })
    } else if(this.props.sortTerm === 'weight'){
      hogs.sort(hog => {
        hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
    } else{}
    return hogs
  }

  render(){
    return(
      <div className='ui grid container'>
        {this.setHogs()}
      </div>
    )
  }
}

export default HogList
