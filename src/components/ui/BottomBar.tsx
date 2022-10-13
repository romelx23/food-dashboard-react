import React, { useContext } from 'react'
import { RiCloseLine, RiHome2Line, RiMenu2Line, RiNotification2Line, RiPieChart2Line, RiToggleLine } from 'react-icons/ri'
import { UiContext } from '../../context'

export const BottomBar = () => {
    const { toggleMenuOpen, toggleMenu, openOrder, toggleOrder } = useContext(UiContext);
    return (
        <nav className='flex justify-between fixed bottom-0 lg:hidden bg-[#1f1d2a] w-full rounded-t-2xl py-3 px-5 text-xl'>
            <a className='flex justify-center items-center hover:bg-[#eb7c69] hover:text-white text-[#eb7c69] hover:cursor-pointer w-12 h-12 rounded-md transition-colors'>
                <RiHome2Line />
            </a>
            <a
                onClick={toggleOrder}
                className='flex justify-center items-center hover:bg-[#eb7c69] hover:text-white text-[#eb7c69] hover:cursor-pointer w-12 h-12 rounded-md transition-colors'>
                {
                    openOrder ? <RiCloseLine /> : <RiPieChart2Line />
                }
            </a>
            <a className='flex justify-center items-center hover:bg-[#eb7c69] hover:text-white text-[#eb7c69] hover:cursor-pointer w-12 h-12 rounded-md transition-colors'>
                <RiNotification2Line />
            </a>
            <a
                onClick={toggleMenuOpen}
                className='flex justify-center items-center hover:bg-[#eb7c69] hover:text-white text-[#eb7c69] hover:cursor-pointer w-12 h-12 rounded-md transition-colors'>
                {
                    !toggleMenu ? <RiCloseLine /> : <RiMenu2Line />
                }
            </a>
        </nav>
    )
}
