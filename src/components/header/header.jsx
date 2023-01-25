 import React from 'react'
import search from '../../img/search.png';
import korzinka from '../../img/korzinka.png';
import kontact from '../../img/kontact.png';
import { Link } from 'react-router-dom';
import './header.css'


export const Header=({children, a} ) =>{
  return ( <>
  <header>
    <div className="container">
      <div className="header">
      <Link to="/" className='header_logo'><img className='header_img_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1024px-Facebook_Home_logo.svg.png" alt="j" /></Link>
        <ul className='header_block'>
        <Link to={`/category/${a.id}`} className='header_item'>Men</Link>
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
          
         <Link to="messege">
         <img className='header_img' src={kontact} alt="k" />
         </Link> 
        </div>
      </div>
    </div>
  </header>
  </>
    
  )
}
 
