import React from "react"
import "./CardModal.css"

const CardModal = (props) => {
  const hendlerClose = () => {
    props.onModalClose()
    props.setCardMod([])
  }

  return (
    <>
      <div
        className={`modal__wrapper ${props.isOpened ? "open" : "close"}`}
        onClick={hendlerClose}
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
                    src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${card.id}/${card.field}`}
                    alt={card.name}
                  />
                  <p>{card.title}</p>
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
