import React from 'react'

const Hog = (props) => {
    const checkCurrent = () => {
      if(props.isCurrent){
        return <div id={props.name}>
          <h3>{props.name}</h3>
          <p>{props.data.specialty}</p>
        </div>
      } else{
        return <h3 id={props.name} >{props.name}</h3>
      }
    }
  // render(){
    return(
      <div  className='ui eight wide column' onClick={props.handleClick}>
        {/* <img src=`../hog-imgs/${this.props}`></img> */}
        {checkCurrent()}
      </div>
    )
  // }
}

export default Hog
