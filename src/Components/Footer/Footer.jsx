import React, {useState} from 'react'
import PoliticModal from "../CardModal/PoliticModal";

import './footer.css'

function Footer() {

  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
  });

  const hadleClick = (e) => {
    e.preventDefault()

    setModal({
      ...modal,
      modal1: true,
    });
    
  }

  return (
    <>
    <div className="footer-wrapper">
      <div className='footer-inner'>
        
        <a href="#" className="footer-login">Saxar Showroom</a><br />
        <div className='footer-links' >
        <a className='footer-links' href="https://www.ozon.ru/seller/saxar-showroom-323675/products/?miniapp=seller_323675">мы на Ozon.ru</a><br />
        <a className='footer-links' href="https://www.wildberries.ru/seller/302655">мы на Wildberries.ru</a><br /><br />
        <a href="https://wa.me/79102139441">Whatsapp</a><br /><br />

        </div>

      </div>
      <div className='footer-polit'><p>Все права защищены © 2023  </p><a onClick={hadleClick} href="#"><p>Политика конфиденциальности</p></a></div>
    </div>
      <PoliticModal isOpened={modal.modal1} onModalClose={() => setModal({ ...modal, modal1: false })}/>
    </>
  )
}

export default Footer