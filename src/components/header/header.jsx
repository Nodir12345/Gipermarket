 import React from 'react'
import search from '../../img/search.png';
import korzinka from '../../img/korzinka.png';
import kontact from '../../img/kontact.png';
import { Link } from 'react-router-dom';
import './header.css'


export const Header=({children}) =>{
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
          <Link to='/shop'>
            <span className='header_btn'>{(children.length)}</span>
          <img className='header_img' src={korzinka} alt="k" />
          </Link>
          
          <img className='header_img' src={kontact} alt="k" />
        </div>
      </div>
    </div>
  </header>
  </>
    
  )
}
 
