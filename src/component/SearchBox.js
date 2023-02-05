import React from 'react'

const SearchBox = (props) => {
  return (
    <div >
      <input type='search' placeholder='search robots' onChange={props.SearchChange}/>
    </div>
  )
}

export default SearchBox
