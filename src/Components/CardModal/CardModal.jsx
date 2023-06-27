import React from "react";
import "./CardModal.css";

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
    {props.cardMod && props.cardMod.map((itm, index)=>(
      <div key={index} className="modal__body">
        <form  method="POST">
          <div className="modal__close" onClick={hendlerClose}>
            ✖
          </div>
         <div id={itm.id}></div>
        </form>
      </div>
      ))}
    {/* {props.cardMod && <div  className="modal__body">
        <form  method="POST">
          <div className="modal__close" onClick={props.onModalClose}>
            ✖
          </div>
         <div id={props.cardMod[0]}></div>
        </form>
      </div>} */}
      </div>
    </>
  );
};

export default CardModal;
