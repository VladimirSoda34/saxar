import React, {useState} from "react"
import "./CardModal.css"

const CardModal = (props) => {
  
  const [foto, setFoto] = useState(null)
  const hendlerClose = () => {
    setFoto(null)
    props.onModalClose()
    props.setCardMod([])
  }
  const hendlerCloseShud =(e) => {
    console.log(e.target.className);
    const lid = e.target.className
    if (lid === "modal__wrapper open" || lid === "modal__body") {
      setFoto(null)
    props.onModalClose()
    props.setCardMod([])
    }
    
  }

  const hadleClick = (e) => {
    let itm = e.target.id
    setFoto(itm)
  }


  console.log(foto);

  return (
    <>
      <div
        className={`modal__wrapper ${props.isOpened ? "open" : "close"}`}
        onClick={hendlerCloseShud}
        style={{ ...props.style }}
      >
        {props.cardMod &&
          props.cardMod.map((card, index) => (
            <div key={index} className="modal__body">
              <div className="card-mod">
                <div className="modal__close" onClick={hendlerClose}>
                  ✖
                </div>
                <div className="card-mod__inner">
                  <img
                    className="card-mod__inner__img"
                    src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${card.id}/${foto !== null ? foto : card.field[0]}`}
                    // src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${card.id}/${foto !== null ? foto : card.field[0]}`}
                    alt={card.name}
                  />
                    <p>{card.title}</p>

                  <div className="cards-stok-wrapper">
                    {card.field && card.field.map((itm, index) =>  (
                      <>
                    <img onClick={hadleClick} id={itm} key={index}  src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${card.id}/${itm}`} alt="card" />
                    
                        </>
                    ))}
                  </div>


                  <div className="links-wrapper">
                    <div className="links-wrapper__link">
                      <div className="link-title">Купить на</div>
                      <div className="links-wrapper">
                        {card.link_wild && (
                          <a href={card.link_wild}>
                            {" "}
                            <p>Wildberries</p>{" "}
                            <img
                              className="arrow"
                              src="./arrow-right.svg"
                              alt=""
                            />
                          </a>
                        )}
                      </div>
                      <div className="links-wrapper">
                      {card.link_ozon && (
                          <a href={card.link_ozon}>
                            {" "}
                            <p>Ozon</p>{" "}
                            <img
                              className="arrow"
                              src="./arrow-right.svg"
                              alt=""
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default CardModal
