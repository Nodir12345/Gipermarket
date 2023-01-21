 import React from 'react'
import search from '../../img/search.png';
import korzinka from '../../img/korzinka.png';
import kontact from '../../img/kontact.png';
import './header.css'


export const Header=() =>{
  return ( <>
  <header>
    <div className="container">
      <div className="header">
      <a className='header_logo' href="http://localhost:3000/">Rapture Athletics</a>
        <ul className='header_block'>
        <li className='header_item'>Men</li>
        <li className='header_item'>Women</li>
        <li className='header_item'>Kids</li>
        <li className='header_item'>Customize</li>
        <li className='header_item'>Customize</li>
        </ul>
        <div className='header_box_img'>
          <img className='header_img' src={search} alt="s" />
          <img className='header_img' src={korzinka} alt="k" />
          <img className='header_img' src={kontact} alt="k" />
        </div>
      </div>
    </div>
  </header>
  </>
    
  )
}
 
