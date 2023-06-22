import React from "react"
import bannerImg from "../../images/banner.png"

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="" />
      <a href="#">
        К покупкам
      </a>
    </div>
    
  )
}

export default Banner
