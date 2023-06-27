import React, { useState } from 'react'
import CardModal from "../CardModal/CardModal";

import "./styles.css"
import ARROW from "../../images/arrow.svg"


function Store({cards,cardMod,setCardMod}) {


  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
  });

  const hedlerClick = (e) => {
    let id = ""

    setModal({
      ...modal,
      modal1: true,
    });
    id = e.target.id
    setCardMod((prevArray => [...prevArray, cards.find(obj => obj.id === id)]))
  }
  

  

  return (
    <>
    
    <div className="cat-list">

      <a href="#">  <p>Все категории</p>  <img className="arrow" src={ARROW} alt="" /></a>
    </div>
    <div className="store-wrapper">
    {cards && cards.map((card, inx)=>(
        <div onClick={hedlerClick} key={inx} className="store-inner">
            <div >
            <img id={card.id}
                src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${card.id}/${card.field}`}
                alt={card.name}
              />
            </div>
              <p>{card.title}</p>
        </div>
        
    ))}
    </div>
    <CardModal isOpened={modal.modal1} onModalClose={() => setModal({ ...modal, modal1: false })} cardMod={cardMod} setCardMod={setCardMod}/>
    </>
  )
}

export default Store