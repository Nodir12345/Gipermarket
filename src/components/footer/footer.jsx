import React from 'react'
import './footer.css'

export const Footer=() =>{
  return (
    <footer className="footer">
    <div className="container footer-box">
      <h2 className='footer_title1'>Rapture Athletics</h2>
      <div className="fotter-content">
        <h3 className="footer-title">
          Copyright
        </h3>
        <p className="footer-discribtion">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin
          massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.
        </p>
      </div>
      <div className="footer-content2">
        <ul className="footer-content-list-box">
          <li className="content-list">Boshsahifa</li>
          <li className="content-list">Xizmatlar</li>
          <li className="content-list">Portfolio</li>
          <li className="content-list">Jamoa</li>
          <li className="content-list">Blog</li>
          <li className="content-list">Kontaktlar</li>
        </ul>
      </div>
      <div className="footer-end">
        <ul className="footer-end-content">

          <li className="footer-end-list">
            Men
          </li>
          <li className="footer-end-list">
          
            Woman
          </li>
          <li className="footer-end-list">
           
           Children
          </li>
        </ul>

      </div>
    </div>
  </footer>
  )
}
