import axios from 'axios'
import React from 'react'
import "./contact.css"
import { useParams } from 'react-router-dom'
export const Contact = () => {
  const [value,setvalue]= React.useState({})
  const param = useParams()

React.useEffect(()=>{
  axios.get(`https://dummyjson.com/products/${param.id}`).then(res=>{
    setvalue(res.data)
  })
},[])


  return (
    <div className='container box_c'>
      <img className='contact_img' src={value.thumbnail} alt="" />
      <div className='contact_box'>
        <p className='contact_text'>{value.title}</p>
        <p className='contact_text'>{value.brand}</p>
        <p className='contact_text'>{value.category}</p>
        <p className='contact_text'>{value.description}</p>
      </div>
    </div>
  )
}
