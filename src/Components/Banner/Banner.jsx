import React from "react"
import bannerImg from "../../images/banner.webp"



function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="buttom" />
      <a id="simpleSider" href="#store">
        К покупкам
      </a>
    </div>
    
  )
}

export default Banner
