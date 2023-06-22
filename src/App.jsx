import React, { useState, useEffect } from "react"
import axios from "axios"
import MenuList from "./Components/MenuList/MenuList"
import Banner from "./Components/Banner/Banner"
import WB from "./images/WB.svg"
import OZON from "./images/OZON.svg"

import "./Styles/style.css"
import "./Styles/app.css"

const baseURL =
  "https://pocketbase-production-176f.up.railway.app/api/collections/cards/records"

function App() {
  const [cards, setCards] = useState(null)
  const [menuList, setMenuList] = useState([])
  const [isToggled, setIsToggled] = useState(false)
  const headerClass = `header ${isToggled && "menu-opened"}`

  const handleClickHeader = () => {
    setIsToggled(!isToggled)
  }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCards(response.data.items)
      setMenuList(response.data.items.map((card) => card.category))
    })
  }, [])

  console.log(menuList)

  console.log(cards)
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

          {/*  */}
          <MenuList menuList={menuList} />
          <li className="menu-item">
            <a href="#">Кардиганы</a>
          </li>
          <li className="menu-item">
            <a href="#">Свитера</a>
          </li>
          <li className="menu-item">
            <a href="#">Куртки</a>
          </li>
          <li className="menu-item">
            <a href="#">Косухи</a>
          </li>
          <li className="menu-item">
            <a href="#">Брюки</a>
          </li>
          
          <br />
          <li className="menu-item">
            <a href="#">Почему мы?</a>
          </li>
          <li className="menu-item">
            <a href="#">О нас</a>
          </li>
          <li className="menu-item">
            <div className="menu-links">
              <a href="#"><img src={WB} alt="" /></a>
            <a href="#"><img src={OZON} alt="" /></a>
            <a href="#">WHATSAPP</a>
            </div>
            
          </li>

          {/*  */}

        </ul>
        <div className="shop icon icon-bag"></div>
      </div>
      <div className="content">
        <Banner />
        {cards &&
          cards.map((item) => (
            <div key={item.id}>
              <h3>{item.category}</h3>
              <img
                src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${item.id}/${item.field}`}
                width="200"
                alt={item.name}
              />
              <p>{item.title}</p>
              <a href={item.link_ozon}>link</a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
