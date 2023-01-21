import React from "react";
import { Header } from "./components/header/header";
import { Step } from "./components/step/step";
import { Own } from "./components/own/own";
import { Bg } from "./components/bg/bg";
import { Card } from "./components/card/card";
import { Child } from "./components/card_child/child";
import { Footer } from "./components/footer/footer";
import axios from "axios";
let URL = "https://dummyjson.com/products"
function App() {
const [item,setitem]= React.useState([])
React.useEffect(() => {
  axios.get(URL).then((res) => {
    setitem(res.data.products)
  })
},[])

  return (
 <>
<Header></Header>
<Step></Step>
<Own></Own>
<Bg></Bg>
<Card>

{
  item.length>8? item.splice(0,8).map(el=><Child {...el} />):
  item.map(el=><Child {...el} />)
}
</Card>
<Footer></Footer>
 </>

  );
}

export default App;
