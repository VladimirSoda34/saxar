import React, { useEffect,useState } from 'react'
import CardModal from "../CardModal/CardModal";

import "./styles.css"

function Store({setCategory, category, activ, setActiv, cards, menuList,cardMod,setCardMod}) {

  const list = menuList.filter((value, index) => {
    return menuList.indexOf(value) === index;
  })

  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
  });


  const hadleClick = (e) => {
    let id = ""

    setModal({
      ...modal,
      modal1: true,
    });
    id = e.target.id
    setCardMod((prevArray => [...prevArray, cards.find(obj => obj.id === id)]))
  }


  
  // const [category, setCategory] = useState("Куртки")
  useEffect(() => {
    setCategory("Куртки")
    setCategories(cards && cards.filter(item => category.includes(item.category)))
  }, [cards])

  useEffect(() => {
    setCategories(cards && cards.filter(item => category.includes(item.category)))
  }, [category])
  
  const [categories,setCategories] = useState(cards && cards.includes(category))

  const hadleCat = (itm) => {
    setCategory(itm)
    setActiv(itm)
  }


  return (
    <>
    <div id="store"></div>
    <div className="test"></div>
    <ul  className="cat-list-wrapper">
    {list.map((itm, index)=>(
        <li onClick={()=>hadleCat(itm)} className={`cat-list ${activ === itm ? "activ" : ""}`} key={index}>{itm}</li>
    ))}

    </ul>
    
    <div className="store-wrapper">
    {categories && categories.map((card, inx)=>(
        <div onClick={hadleClick} key={inx} className="store-inner">
            <div>
            <img id={card.id}
                src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${card.id}/${card.field[0]}`}
                alt={card.name}
              />
            </div>
            <div className="card-title__wrapper">

              <p id={card.id}>{card.title}</p>
            </div>
        </div>
        
    )) }
    </div>
    <CardModal isOpened={modal.modal1} onModalClose={() => setModal({ ...modal, modal1: false })} cardMod={cardMod} setCardMod={setCardMod}/>
    </>
  )
}

export default Store