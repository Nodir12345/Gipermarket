import React from 'react'
import { Link } from 'react-router-dom'
export const Child=({thumbnail,description ,title,id,setdata})=> {
  return (
    <div>
    <li className="card_item">
    <img className="card_img" src={thumbnail} alt="sh1" />
     <h3 className="card_item_title">{title.length < 15? title:
     title.slice(0,10)}</h3>
    <p className="card_item_text">{description.length<20? description:
    description.slice(0,25)}</p>
    <div className='btns'>

    <button onClick={()=>setdata(id) }  className="card_btn">🛒</button>
    <Link to={`/contact/${id}`}>

    
    <button id={id}className="card_btn more">✉️</button>
    </Link>
    </div>
  </li>
  </div>
  )
}

