import React from "react"
import "./banner.css"



function Banner() {
  return (
    <div className="banner">
      <p className="banner-title">Saxar Showroom</p>
      <div className="banner-desk">
      <div>
        <img className="desk-img" src="./banner-desc.webp" alt="" />
      <img className="banner-mob" src="./banner-mob.webp" alt="buttom" />
      <a id="simpleSider" href="#store">
        К покупкам
      </a>
      </div>
      </div>
    </div>
    
  )
}

export default Banner
