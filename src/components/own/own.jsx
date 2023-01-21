import React from "react";
import './own.css'
import shoes from '../../img/shoes.png';
export const Own=() =>{
return<>
<section>
  <div className="container">
    <div className="own">
      <img src={shoes} alt="sh" />
      <div className="own_block">
        <h2 className="own_title">Be your Own Level</h2>
        <p className="own_text">The right shoes can take any outfit from basic to stylish with just a few steps. At our shoe store, we have a wide variety of stylish shoes to help you create the perfect look. From contemporary sneakers to classic loafers, we have something to match all tastes and occasions. Our shoes are designed to be comfortable, durable, and fashionable, so you can look and feel your best no matter what you’re wearing.</p>
        <button className='step_btn'>Shop Now</button>
      </div>
    </div>
  </div>
</section>
</>
}