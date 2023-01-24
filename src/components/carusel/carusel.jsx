import React from 'react'
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./cs.css"
export const Carusel1 = () => {
  const [carusel,setcarusel]=React.useState([])
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30]= carusel.map(el=>el.thumbnail)

const [img91,img92,img93,img94,img95,img96,img97,img98,img99,img190,img191,img192,img193,img194,img195,img196,img197,img198,img199,img290,img291,img292,img293,img294,img295,img296,img297,img298,img299,img390]= carusel.map(el=>el.title)

  React.useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setcarusel(res.data.products)
    })
  }, [])

  return (
    <div className='container'>
    <Carousel autoPlay   responsive={responsive}>
    <div>
    <img className='imgs' src={img1} alt="img" />   
     <h3>{img91}</h3>
    </div>
    <div>
    <img className='imgs' src={img2} alt="img" />   
     <h3>{img92}</h3>
    </div>
    <div>
    <img className='imgs' src={img3} alt="img" />   
     <h3>{img93}</h3>
    </div>
    <div>
    <img className='imgs' src={img4} alt="img" />   
     <h3>{img94}</h3>
    </div>
    <div>
    <img className='imgs' src={img5} alt="img" />   
     <h3>{img95}</h3>
    </div>
    <div>
    <img className='imgs' src={img6} alt="img" />   
     <h3>{img96}</h3>
    </div>
    <div>
    <img className='imgs' src={img7} alt="img" />   
     <h3>{img97}</h3>
    </div>
    <div>
    <img className='imgs' src={img8} alt="img" />   
     <h3>{img98}</h3>
    </div>
    <div>
    <img className='imgs' src={img9} alt="img" />   
     <h3>{img99}</h3>
    </div>
    <div>
    <img className='imgs' src={img10} alt="img" />   
     <h3>{img190}</h3>
    </div>
    <div>
    <img className='imgs' src={img11} alt="img" />   
     <h3>{img191}</h3>
    </div>
    <div>
    <img className='imgs' src={img12} alt="img" />   
     <h3>{img192}</h3>
    </div>
    <div>
    <img className='imgs' src={img13} alt="img" />   
     <h3>{img193}</h3>
    </div>
       <div>
    <img className='imgs' src={img14} alt="img" />   
     <h3>{img194}</h3>
    </div>
    <div>
    <img className='imgs' src={img15} alt="img" />   
     <h3>{img195}</h3>
    </div>
    <div>
    <img className='imgs' src={img16} alt="img" />   
     <h3>{img196}</h3>
    </div>
    <div>
    <img className='imgs' src={img17} alt="img" />   
     <h3>{img197}</h3>
    </div>
    <div>
    <img className='imgs' src={img18} alt="img" />   
     <h3>{img198}</h3>
    </div>
    <div>
    <img className='imgs' src={img19} alt="img" />   
     <h3>{img199}</h3>
    </div>
    <div>
    <img className='imgs' src={img20} alt="img" />   
     <h3>{img290}</h3>
    </div>
    <div>
    <img className='imgs' src={img21} alt="img" />   
     <h3>{img291}</h3>
    </div>
    <div>
    <img className='imgs' src={img22} alt="img" />   
     <h3>{img292}</h3>
    </div>
    <div>
    <img className='imgs' src={img23} alt="img" />   
     <h3>{img293}</h3>
    </div>
    <div>
    <img className='imgs' src={img24} alt="img" />   
     <h3>{img294}</h3>
    </div>
    <div>
    <img className='imgs' src={img25} alt="img" />   
     <h3>{img295}</h3>
    </div>
    <div>
    <img className='imgs' src={img26} alt="img" />   
     <h3>{img296}</h3>
    </div>
    <div>
    <img className='imgs' src={img27} alt="img" />   
     <h3>{img297}</h3>
    </div>
    <div>
    <img className='imgs' src={img28} alt="img" />   
     <h3>{img298}</h3>
    </div>
    <div>
    <img className='imgs' src={img29} alt="img" />   
     <h3>{img299}</h3>
    </div>
    <div>
    <img className='imgs' src={img30} alt="img" />   
     <h3>{img390}</h3>
    </div>


  </Carousel>
  </div>
  )
}
