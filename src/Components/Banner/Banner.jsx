import React from "react"
import "./banner.css"



function Banner() {
  return (
    <div className="banner">
      <p className="banner-title">Saxar Showroom</p>
      <div className="banner-desk">
      <div>
       <a className="button-top" /*id="simpleSider"*/ href="#store"> 
        К покупкам
      </a>
        <img className="desk-img" src="./banner-desc.webp" alt="desk-img" />
      <img className="banner-mob" src="./banner-mob.webp" alt="buttom" />
      <a className="button-bottom" /*id="simpleSider"*/  href="#store">
        К покупкам
      </a>
      </div>
      </div>
    </div>
    
  )
}

export default Banner
