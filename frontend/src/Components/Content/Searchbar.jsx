import React, { useState } from 'react';
import './searchbar.css';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = (props) => {
  const {setLocation} = props;
  const [locationValue, setLocationValue] = useState();
  function handleClick() {
    setLocation(locationValue);
  }
  return (
    <content>
      <div className="container">
        <h3>LOCATION</h3>
        <input type="text" className='input' placeholder='ENTER YOUR LOCATION' onChange={(e)=>setLocationValue(e.target.value)}/>
        <div className='round-icon'>
          <SearchIcon className="icon" onClick={handleClick}/>
        </div>
      </div>
    </content>
  )
}

export default Searchbar
