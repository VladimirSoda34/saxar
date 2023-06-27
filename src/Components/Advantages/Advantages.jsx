import React from "react"
import './advantages.css'

const data = [
  {
    id: 1,
    title: "Эксклюзивность",
    desc: "Мы создаем уникальные модели. Каждая деталь, каждый фасон - это результат нашего творчества и старания.",
  },
  {
    id: 2,
    title: "Качество",
    desc: "Используем только качественные материалы и тщательно контролируем каждую стадию производства.",
  },
  {
    id: 3,
    title: "Большой выбор",
    desc: "Наш ассортимент включает разнообразные модели и стили, чтобы каждая женщина смогла найти именно то, что отражает ее индивидуальность и стиль.",
  },
  {
    id: 4,
    title: "быстрая доставка",
    desc: "Мы ценим ваше время и максимально сокращаемвремя ожидания. Гарантируем оперативную обработку заказов и быструю доставку.",
  },
]

function Advantages() {
  return (
    <div className="advantages-wrapper">

      {data.map((itm, index) => (
        <div key={index} className="advantages-inner">
            <div className="wrapper-img">
                
          <div className="advantages-title">{itm.title}</div>
          <div className="advantages-img">

          <img  src={`./advantages-${itm.id}.svg`} alt="img" />
          </div>
            </div>
          <div className="advantages-desc">{itm.desc}</div>
        </div>
      ))}
    </div>
  )
}

export default Advantages
