import React from 'react'

export const Child=(el)=> {
  return (
    <>
    <li className="card_item">
    <img className="card_img" src={el.images[0]} alt="sh1" />
     <h3 className="card_item_title">{el.title.length < 15? el.title:
     el.title.slice(0,10)}</h3>
    <p className="card_item_text">{el.description.length<20? el.description:
    el.description.slice(0,25)}</p>
    <button className="card_btn">Purchase Now</button>
  </li>
  </>
  )
}

