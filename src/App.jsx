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
  const [defCat, setDefCat] = useState([])
  const [cardMod, setCardMod] = useState([])
  const [activ, setActiv] = useState("Куртки")
  const [category, setCategory] = useState("Куртки")


  const [isToggled, setIsToggled] = useState(false)
  const headerClass = `header ${isToggled && "desc menu-opened"}`

  const handleClickHeader = () => {
    setIsToggled(!isToggled)
  }


  let defCategory = "Куртки"

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data.items
      setCards(data)
      setMenuList(response.data.items.map((card) => card.category))
      setDefCat(data.filter(item => defCategory.includes(item.category))) 
    })
  }, [])


  
 
  return (
    <div className="window">
      <div onClick={handleClickHeader} id="header" className={headerClass}>
        <div onClick={handleClickHeader} className="burger-container">
          <div id="burger">
            <div className="bar topBar"></div>
            <div className="bar btmBar"></div>
          </div>
        </div>
        <div className="icon icon-apple"><div className="header-logo"><img className="logo-inner" src="./logo.png" width="30" height="30" alt="logo" />SAXAR</div></div>
        <ul className="menu">
          <li className="menu-item">
            <a href="#simpleSider">Популярное</a>
          </li>
          <MenuList setActiv={setActiv} setCategory={setCategory} menuList={menuList} />
          <br />
          <li className="menu-item">
            <a href="#advantages">Почему мы?</a>
          </li>
          <li className="menu-item">
            <a href="#about">О нас</a>
          </li>
          <li className="menu-item">
            <div className="menu-links">
              <a href="https://www.wildberries.ru/seller/302655">
                <img src="./WB.svg" alt="WB" />
              </a>
              <a href="https://www.ozon.ru/seller/saxar-showroom-323675/products/?miniapp=seller_323675">
                <img src="./OZON.svg" alt="OZON" />
              </a>
              <a href="https://wa.me/79102139441">
                <img src="./whatsapp.svg" alt="whatsapp" />
              </a>
            </div>
            <br />
          </li>
          <li className="menu-item">
          <a className="tele-link" href="https://t.me/SaxRoM_bot">
                <img width="47" src="./telegram.svg" alt="OZON" /><p>Поддержка</p>
               </a>
          </li>
        </ul>
        <div className="shop icon icon-bag"></div>
      </div>
      <div className="content">
        <Banner />
        <div id="simpleSider"></div>

        <div className="title-pop"><p  className="title">
          популярное
        </p></div>
        
      </div>
      

      <SimpleSlider cards={cards} cardMod={cardMod} setCardMod={setCardMod} />
      <Store category={category} setCategory={setCategory} activ={activ} setActiv={setActiv} defCat={defCat} menuList={menuList} cards={cards} cardMod={cardMod} setCardMod={setCardMod}/>
      <div className="inner-container">
        <div id="advantages"></div>
        <p  className="title">почему мы?</p>
        <Advantages />
        <div id="about"></div>
        <p  className="about-title-mob">
          Это –<br /> Saxar Showroom
        </p>
        <AboutUs />
      </div>
      <Footer  />
    </div>
  )
}

export default App
