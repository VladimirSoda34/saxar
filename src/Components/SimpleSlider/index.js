import Slider from "react-slick";
import { useState, useEffect, useRef } from 'react';
import CardModal from "../CardModal/CardModal";

import "./styles.css";
import "./slick.css";
import "./slick-theme.css";

export const SimpleSlider = ({ initialSlide = 0, cards, cardMod,setCardMod }) => {

  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
  });

  const [hasSetPosition, setHasSetPosition] = useState(false);

  let popCards = []

  popCards.push(cards && cards.filter(card => card.is_pop === true))

  const slider = useRef();

  useEffect(() => {
    
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  // onClick срабатывает только если между onMouseDown и onMouseUp  небыло onMouseMove

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [hasMouseMove, setHasMouseMove] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
    setHasMouseMove(false);
  };

  const handleMouseMove = () => {
    if (isMouseDown) {
      setHasMouseMove(true);
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleClick = (e) => {
    if (!hasMouseMove) {
    let id = ""

    setModal({
      ...modal,
      modal1: true,
    });
    id = e.target.id
    setCardMod((prevArray => [...prevArray, cards.find(obj => obj.id === id)]))
  }
}
// 
    

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <Slider ref={slider} {...settings} >
      {popCards[0] &&
          popCards[0].map((item) => (
            <div  className="card-wrapper"  key={item.id}>
              <div className="img-wrapper">

              <img id={item.id}
              
              onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
              
              onClick={handleClick}
                src={`https://pocketbase-production-176f.up.railway.app/api/files/4s1neb5hsp69xyo/${item.id}/${item.field}`}
                alt={item.name}
              />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
    </Slider>
    <CardModal isOpened={modal.modal1} onModalClose={() => setModal({ ...modal, modal1: false })} cardMod={cardMod} setCardMod={setCardMod}/>
    
    </>
  )
}