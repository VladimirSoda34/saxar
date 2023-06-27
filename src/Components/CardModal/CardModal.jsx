import React from "react";
import "./CardModal.css";

const CardModal = (props) => {
  // const purchase = props.cartItems.map((x, idx) => (
  //   <div className="listPurchase" name="purchase" key={idx}>
  //     {x.title} - {x.quantity}(шт)
  //   </div>
  // ));

  // const purchaseToTele = props.cartItems.map(
  //   (x) => ` ${x.title}  ${x.price}р  ${x.quantity} шт ||`
  // );

  

  
  return (
    <>
    {props.cardMod && props.cardMod.map((itm)=>(
      
    <div
      className={`modal__wrapper ${props.isOpened ? "open" : "close"}`}
      style={{ ...props.style }}
    >
      <div className="modal__body">
        <form  method="POST">
          <div className="modal__close" onClick={props.onModalClose}>
            ✖
          </div>
          <div className="titlePurchase">
            {/* Заказ :<div className="allPurchase">{purchase}</div> */}
            <div className="totalPrise">
              на сумму:&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#238f93" }}>{props.totalPrice} ₽</span>
              <br />
              
              &nbsp;
              <br />
              
              &nbsp;
              <br />
             
              
              <br />
            </div>
          </div>

          <legend>Форма доставки</legend>

          <input
            className="purchase"
            type="text"
            name="userId"
            id="id_userId"
            // defaultValue={userId}
          />
          <input
            className="purchase"
            type="text"
            name="userName"
            id="id_userName"
            // defaultValue={userName}
          />

          <input
            className="purchase"
            type="text"
            name="purchase"
            id="id_purchase"
            // defaultValue={purchaseToTele}
          />

          <input
            className="purchase"
            type="text"
            name="promo"
            id="id_promo"
            defaultValue={props.inpValue}
          />

          <label htmlFor="id_name">ФИО</label>
          <input type="text" name="name" id="id_name" />

          <label htmlFor="id_phone">Tелефон (telegram)</label>
          <input type="text" name="phone" id="id_phone" />

          <label htmlFor="id_adres">Адрес доставки</label>
          <input type="text" name="adres" id="id_adres" />

          <label htmlFor="id_postcode">Почтовый индекс</label>
          <input type="text" name="postcode" id="id_postcode" />

          <div className="buttons">
            <input type="submit" value="Отправить" />
            <br />
          <br /> <a href="https://t.me/tele_grib_Store"><span style={{ color: "#238f93" }}>
                @tele_grib_Store -{" "}
                <span style={{ color: "rgb(118, 63, 132)" }}>поддержка</span>
              </span></a>
              
              <br />
          </div>
        </form>
      </div>
    </div>
      ))}
    </>
  );
};

export default CardModal;
