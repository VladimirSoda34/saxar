import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className='footer-inner'>
        
        <a href="#" className="footer-login">Saxar Showroom</a><br />
        <div className='footer-links' >
        <a className='footer-links' href="https://www.ozon.ru/seller/saxar-showroom-323675/products/?miniapp=seller_323675">мы на Ozon.ru</a><br />
        <a className='footer-links' href="https://www.wildberries.ru/seller/302655">мы на Wildberries.ru</a><br /><br />
        <a href="#">Whatsapp</a><br /><br />

        </div>

      </div>
      <div className='footer-polit'><p>Все права защищены © 2023  </p><p>Политика конфиденциальности</p></div>
        
    </div>
  )
}

export default Footer