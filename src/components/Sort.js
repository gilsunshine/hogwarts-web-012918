import React from 'react'

const Sort = (props) => {

  return(
    <div>
      <select onChange={props.changeSort}>
        <option value='none'>None</option>
        <option value='name'>Name</option>
        <option value='weight'>Weight</option>
      </select>
    </div>
  )
}

export default Sort
