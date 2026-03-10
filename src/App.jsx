import React from 'react'
import "./index.css"
import Header from './cotegori/header'
import Product from './cotegori/product'
import BigProduct from './cotegori/bigProduct'
import Card from './cotegori/card'
import Map from './cotegori/map'
import Flex from './cotegori/flex'
import Cards from './cotegori/cards'
import Spisoc from './cotegori/spisoc'
import Login from './cotegori/login'
import Footer from './cotegori/footer'

const App = () => {
  return (
    <div>
      <Header />
      <Product />
      <BigProduct />
      <Card />
      <Map />
      <Flex />
      <Cards />
      <Spisoc />
      <Login />
      <Footer />
    </div>
  )
}

export default App
