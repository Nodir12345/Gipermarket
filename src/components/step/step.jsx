import React from 'react'
import './step.css'
import year from '../../img/Group2.png';
export const Step = ()=> {
  return (
    <section className='step_section'>
      <div className="container">
        <div className="step">
<div>
  <h1 className='step_title'>Step Into Style with Our Trendy Shoes!</h1>
  <img className='step_img' src={year} alt="year" />
  <p className='step_text'>Our collections include a wide range of shoes for men, women, and children.</p>
  <button className='step_btn'>Shop Now</button>

</div>
<div className='bground'></div>
        </div>
      </div>
    </section>
  )
}

