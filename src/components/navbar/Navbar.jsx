import React, { useEffect , useRef } from 'react'
import  HomeIcon from '@mui/icons-material/HomeOutlined'
import InfoIcon from '@mui/icons-material/InfoSharp'
import ShortcutIcon from '@mui/icons-material/Shortcut';
// import Close from '@mui/icons-material/Close'
import Search from '@mui/icons-material/Search';
import './navbar.scss';

export default function Navbar() {

const searchRef = useRef();

useEffect(()=>{

},[])

useEffect(()=>{
  const searchInputElement = searchRef.current;
  const searchIcon = document.getElementsByClassName('search-icon')[0];
  searchInputElement.addEventListener('focus',()=>{
    searchIcon.style.height="50%";
  })

  searchInputElement.addEventListener('focusout', ()=>{
    searchIcon.style.height="0";
  })

},[searchRef])


  return (
    <div id="navbar">
      
      <div className="title">
        <h5 className="app-name">dummy</h5>
      </div>

      <div className="center">
       
       <div className="nav-wrapper">
          <div className="navs">
            
            <div className="navlink">
              <HomeIcon className='icon' />
              <p className="link-text">Home</p>
            </div>

            <div className="navlink">
            <InfoIcon className='icon' />
              <p className="link-text">About us</p>
            </div>
            
            <div className="navlink">
              <ShortcutIcon className='icon' />
              <p className="link-text">Contact us</p>
            </div>

          </div>
       </div>

        <div className="search-bar">
          <input type="text" className="search" placeholder='search' ref={searchRef}/>
          {/* <Close className="clear-icon" onClick={()=>{searchRef.current.value=""}}/> */}
          <Search className="search-icon" />
        </div>

      </div>

      <div className="right">
        <p className='user-name'>hi, yogesh</p>
        <img className="image" src='https://i.pinimg.com/originals/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg' />
      </div>

    </div>
  )
}
