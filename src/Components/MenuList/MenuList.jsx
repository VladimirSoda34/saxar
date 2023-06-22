import React from 'react'

function MenuList({menuList}) {
  return (
    <>
    {menuList.map((itm)=>(
        <li className="menu-item">
        <a href="#">{itm}</a>
      </li>
    ))}
    
    </>
  )
}

export default MenuList