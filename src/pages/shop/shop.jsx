import React from 'react'
import "./shop.css"
export const Shop = ({ thumbnail, price, title, id }) => {
  const [value, setvalue] = React.useState(0)
  const [item, setitem] = React.useState(true)
  let data = JSON.parse(localStorage.getItem("korzinka"))
  const change = () => {

    if (data.map(el => el.id === id)) {
      let arr = []
      for (let d = 0; d < data.length; d++) {
        if (data.map(el => (el.id === data[d].id))) {
          setitem(() => localStorage.removeItem("korzinka") || [])
        }
        else {
          console.log("xayr");
          arr.push(data[d])
        }
      }
      setitem(() => localStorage.setItem('item', JSON.stringify(arr) || []))
    }


  }
  console.log(item);
  console.log("salom");
  return (
    <div className='container shop'>
      {item ? <div>
        <ul>
          <li className='shop_item'>
          <button className='xx' onClick={(() => change())}>X</button>
            <img className='img' src={thumbnail} alt="" />
            <p>{title>15? title : title.slice(0,15)}</p>
            <p>${price}</p>
            <div className='counter'>
            <button className='remove' onClick={() => setvalue(value>0 ? value - 1 : 0)}>-</button>
            <p>{value}</p>
            <button className='add' onClick={() => setvalue(value + 1)}>+</button>
            </div>
            <p>${(value * price).toFixed(2)}</p>
            
          </li>
        </ul>
      </div> :""}
    </div>
  )
}
