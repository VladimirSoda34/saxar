import React from 'react'
import "./stales.css"
import ARROW from "../../images/arrow.svg"


function Store({cards}) {
  return (
    <>
    <div className="cat-list">

      <a href="#">  <p>Все категории</p>  <img className="arrow" src={ARROW} alt="" /></a>
    </div>
    <div className="store-wrapper">
    {cards && cards.map((card, inx)=>(
        <div key={inx} className="store-inner">
            <div >
            <img 
                src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${card.id}/${card.field}`}
                alt={card.name}
              />
            </div>
              <p>{card.title}</p>
        </div>
        
    ))}
    </div>
    </>
  )
}

export default Store