import React, { useEffect,useState } from 'react'
import CardModal from "../CardModal/CardModal";

import "./styles.css"

function Store({cards,defCat, menuList,cardMod,setCardMod}) {

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


  
  const [category, setCategory] = useState("Куртки")
  useEffect(() => {
    setCategory("Куртки")
    setA(cards && cards.filter(item => category.includes(item.category)))
  }, [cards])
  console.log(cards, "ГОВГ");
  
  const [a,setA] = useState(cards && cards.includes(category))
  // let renderCategory = []



useEffect(() => {
  // filterCards(category);
  async function filterCards(category) {
    const result = await cards;
    
    // renderCategory = result && result.includes(category);
    setA(result && result.filter(item => category.includes(item.category)))
    // setTimeout(console.log(result), 2000)


  }
  filterCards(category);
}, [category])

  const hadleCat = (e) => {
    let value = e.target.value
    setCategory(value)


  }



console.log(a);
  return (
    <>
    <div id="store"></div>
    <div className="test"></div>
    <div  className="cat-list-wrapper">
    {list.map((itm, index)=>(
        <input onClick={hadleCat} className="cat-list" key={index} defaultValue={itm}/>
    ))}

    </div>
    
    <div className="store-wrapper">
    {a && a.map((card, inx)=>(
        <div onClick={hadleClick} key={inx} className="store-inner">
            <div>
            <img id={card.id}
                src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${card.id}/${card.field}`}
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