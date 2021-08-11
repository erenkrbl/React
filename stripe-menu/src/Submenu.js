import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubMenuOpen, location } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const subMenu = container.current;
    const { center, bottom} = location;
    subMenu.style.left = `${center}px`
    subMenu.style.top = `${bottom}px`
    
  }, [location])

  return (
    <aside className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      submenu component
    </aside>
  )
}

export default Submenu
