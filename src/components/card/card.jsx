import React from "react";
import './card.css'
export const Card =({children})=>{
  return <>
  <section>
    <div className="container">
      <div className="card">
        <h2 className="card_title">Trending in 2023</h2>
        <ul className="card_block">
          {children}
        </ul>
      </div>
    </div>
  </section>
  </>
}