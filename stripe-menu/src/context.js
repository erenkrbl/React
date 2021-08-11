import React, { useState, useContext } from 'react'
import sublinks from './data';

const AppContext =React.createContext();



export const AppProvider = ({ children }) => {
    const [isSideBarOpen, setSideBarOpen] = useState(true);
    const [isSubMenuOpen, setSubMenuOpen] = useState(true);

    const openSideBar = () => {
        setSideBarOpen(true);
    }
    const closeSideBar = () => {
        setSideBarOpen(false);
    }
    const openSubMenu = () => {
        setSubMenuOpen(true);
    }
    const closeSubMenu = () => {
        setSubMenuOpen(false);
    }
    return (
        <AppContext.Provider  value={{
            isSideBarOpen, 
            isSubMenuOpen, 
            openSideBar, 
            closeSideBar, 
            openSubMenu,
            closeSubMenu, 
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
