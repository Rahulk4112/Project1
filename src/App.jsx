import { useState } from 'react'
import './App.css'
import Home from './Component/home'
import Cards from './Component/Cards'
import Carousel1 from './Component/Carousel'
import Footer1 from './Component/Foot'
import Form1 from './Component/Form1'
import Rating1 from './Component/Rating'
import Content from './Component/Content'
import Content1 from './Component/Content'
import Team from './Component/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home></Home>
      <Carousel1></Carousel1>
      <Form1></Form1>
      <div className="text-bold text-6xl m-12 p-12">My Projects</div>
      <Cards ></Cards>
      <Cards></Cards>
      <Team></Team>
      <Content1></Content1>
      <Rating1></Rating1>
      <Footer1></Footer1>
    </>
  )
}

export default App
