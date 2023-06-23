import React from 'react'
// import { v4 as uuidv4 } from 'uuid';

function MenuList({menuList}) {
  // const id = uuidv4();
  const list = menuList.filter((value, index) => {
    return menuList.indexOf(value) === index;
  })
  console.log(list);
  return (
    <>
    {list.map((itm, index)=>(
        <li key={index} className="menu-item">
        <a href="#">{itm}</a>
      </li>
    ))}
    
    </>
  )
}

export default MenuList