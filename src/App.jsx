import React, { useState, useEffect } from "react"
import axios from "axios"
import { SimpleSlider } from "./Components/SimpleSlider"
import MenuList from "./Components/MenuList/MenuList"
import Banner from "./Components/Banner/Banner"
import Store from "./Components/Store/Store"
import Advantages from "./Components/Advantages/Advantages"
import AboutUs from "./Components/AboutUs/AboutUs"
import Footer from "./Components/Footer/Footer"

import "./Styles/style.css"
import "./Styles/app.css"

const baseURL =
  "https://pocketbase-production-176f.up.railway.app/api/collections/cards/records"

function App() {
  const [cards, setCards] = useState(null)
  const [menuList, setMenuList] = useState([])
  // const [cardId, setCardId] = useState("")
  const [cardMod, setCardMod] = useState([])
  const [isToggled, setIsToggled] = useState(false)
  const headerClass = `header ${isToggled && "menu-opened"}`

  const handleClickHeader = () => {
    setIsToggled(!isToggled)
  }

  // const cardMod = cards?.find(obj => obj.id === cardId);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data.items
      setCards(data)
      setMenuList(response.data.items.map((card) => card.category))
    })
  }, [])
  
  // console.log(menuList)
  // console.log(cardMod)
  
  // console.log(cardId)
 

  return (
    <div className="window">
      <div id="header" className={headerClass}>
        <div onClick={handleClickHeader} className="burger-container">
          <div id="burger">
            <div className="bar topBar"></div>
            <div className="bar btmBar"></div>
          </div>
        </div>
        <div className="icon icon-apple">SAXAR</div>
        <ul className="menu">
          <li className="menu-item">
            <a href="#">Популярное</a>
          </li>
          <MenuList menuList={menuList} />
          <br />
          <li className="menu-item">
            <a href="#">Почему мы?</a>
          </li>
          <li className="menu-item">
            <a href="#">О нас</a>
          </li>
          <li className="menu-item">
            <div className="menu-links">
              <a href="#">
                <img src="./WB.svg" alt="" />
              </a>
              <a href="#">
                <img src="./OZON.svg" alt="" />
              </a>
              <a href="#">WHATSAPP</a>
            </div>
          </li>
        </ul>
        <div className="shop icon icon-bag"></div>
      </div>
      <div className="content">
        <Banner />
        <p className="title" style={{ textAlign: "center" }}>
          популярное
        </p>
      </div>

      <SimpleSlider cardMod={cardMod} setCardMod={setCardMod} />
      <Store cards={cards} cardMod={cardMod} setCardMod={setCardMod}/>
      <div className="inner-container">
        <p className="title">почему мы?</p>
        <Advantages />
        <p className="title">
          Это –<br /> Saxar.Showroom
        </p>
        <AboutUs />
      </div>
      <Footer  />
    </div>
  )
}

export default App
