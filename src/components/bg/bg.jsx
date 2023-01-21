import React from 'react'
import './bg.css'
export const Bg=() =>{
  return (
    <section>
      <div className="container">
        <div className="box">
          <div className="box1"></div>
          <div className="box2">
          <p className='bg_text'>Facebook</p>
          <p className='bg_text'>Instagram</p>
          <p className='bg_text'>Twitter</p></div>
          <div className="box3"><p className='more'>Explore More </p> <span className='line'>→</span></div>
        </div>
      </div>
    </section>
  )
}
