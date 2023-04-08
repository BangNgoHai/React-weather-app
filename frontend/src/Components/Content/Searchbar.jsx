import React, { useState } from 'react'
import './searchbar.css'
import SearchIcon from '@mui/icons-material/Search'

const Searchbar = (props) => {
  const { location, setLocation } = props
  const [locationValue, setLocationValue] = useState()

  function handleClick () {
    setLocation(locationValue)
  }

  return (
    <div className="h-full w-[400px] flex flex-col justify-start">
      <h3>LOCATION</h3>
      <div className="flex flex-row items-baseline">
      <input type="text" className="input" placeholder="ENTER YOUR LOCATION" value={location}
             onChange={(e) => setLocationValue(e.target.value)}/>
      <div className="mt-4">
        <SearchIcon className="icon hover:bg-[#146C94] active:bg-black hover:fill-white rounded-xl" onClick={handleClick}/>
      </div>
      </div>
    </div>
  )
}

export default Searchbar
