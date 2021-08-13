import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { 
    isSubMenuOpen, 
    page : { page, links },
    location, 
  } = useGlobalContext();
  const container = useRef(null);
  const [colums, setColums] = useState('col-2')

  useEffect(() => {
    setColums('col-2')
    const subMenu = container.current;
    const { center, bottom} = location;
    subMenu.style.left = `${center}px`
    subMenu.style.top = `${bottom}px`
    if(links.length === 3) {
      setColums('col-3')
    }
    if(links.length > 3) {
      setColums('col-4')
    }
  }, [location])

  return (
    <aside 
      className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`} 
      ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${colums}`}>
        {links.map((link, index) => {
          const { icon, label, url} = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
