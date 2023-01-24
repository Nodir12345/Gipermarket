import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Step } from "./components/step/step";
import { Own } from "./components/own/own";
import { Card } from "./components/card/card";
import { Child } from "./components/card_child/child";
import { Footer } from "./components/footer/footer";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact/contact";
import { Carusel1 } from "./components/carusel/carusel";
import axios from "axios";
let URL = "https://dummyjson.com/products"
function App() {
  const [local, setLocal] = React.useState(JSON.parse(localStorage.getItem("korzinka")));
  const [use, setuse] = React.useState(JSON.parse(localStorage.getItem("korzinka")) || []);
  const [item, setitem] = React.useState([]);
  React.useEffect(() => {
    axios.get(URL).then((res) => {
      setitem(res.data.products)
    })
  }, [])
  const setdata = (id) => {
    for (let i of item) {
      if (i.id === id) {
        const result = JSON.parse(localStorage.getItem("korzinka")) || []
        if (result?.some(el => el.id === i.id)) {
          alert("aval qushilgan")
        }
        else {
          result.push(i)
          localStorage.setItem("korzinka", JSON.stringify(result))
        }
        console.log(result);
        setuse(JSON.parse(localStorage.getItem("korzinka")))
        setLocal(JSON.parse(localStorage.getItem("korzinka")));
      }
    }
  }

  

  
  return (
    <>
      <Header>{use}</Header>

      <Routes>
        <Route path="/" element={
          <div>
            <Step></Step>
            <Own></Own>
            <Carusel1></Carusel1>
            <Card>

              {
                item.map(el => <Child key={el.id}  {...el} setdata={() => setdata(el.id)} />)
              }
            </Card>
          </div>
        }>

        </Route>
        <Route path="/shop" element={local?.map(el => <Shop key={el.id} {...el}></Shop>)}></Route>
        <Route path="/contact/:id" element={<Contact ></Contact>}></Route>

      </Routes>

      <Footer></Footer>
    </>

  );
}

export default App;
