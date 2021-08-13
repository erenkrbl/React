import React, { useState, useContext } from 'react'
import sublinks from './data';

const AppContext =React.createContext();



export const AppProvider = ({ children }) => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links:[] })

    const openSideBar = () => {
        setSideBarOpen(true);
    }
    const closeSideBar = () => {
        setSideBarOpen(false);
    }
    const openSubMenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page)
        setLocation(coordinates)
        setSubMenuOpen(true);
    }
    const closeSubMenu = () => {
        setSubMenuOpen(false);
    }
    return (
        <AppContext.Provider  
            value={{
                isSideBarOpen, 
                isSubMenuOpen, 
                openSideBar, 
                closeSideBar, 
                openSubMenu,
                closeSubMenu,
                location,
                page, 
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
