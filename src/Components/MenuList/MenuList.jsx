import React from 'react'
// import { v4 as uuidv4 } from 'uuid';

function MenuList({setCategory, setActiv, menuList}) {
  // const id = uuidv4();
  const list = menuList.filter((value, index) => {
    return menuList.indexOf(value) === index;
  })

  const hadleCat = (itm) => {
    setCategory(itm)
    setActiv(itm)
  }
  
  return (
    <>
    {list.map((itm, index)=>(
        <li  key={index}  className="menu-item">
        <a onClick={()=>hadleCat(itm)} href="#store">{itm}</a>
      </li>
    ))}
    
    </>
  )
}

export default MenuList