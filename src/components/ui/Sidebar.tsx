import React, { useContext } from 'react';
import {
    RiLogoutBoxLine,
} from 'react-icons/ri'
import { menuItems } from '../../constants/menuItem';
import { UiContext } from '../../context';
import logo from './../../assets/logo.svg';

export const Sidebar = () => {
    const { toggleMenu } = useContext(UiContext);
    return (
        <div className={`fixed left-0 bg-[#1f1d2a] text-white w-20 min-h-screen flex-col justify-between rounded-r-2xl flex transition-all z-10 lg:left-0 ${toggleMenu ? '-left-full' : 'left-0'}`}>
            <ul className='flex flex-col gap-4 pl-2 '>
                <li className='flex justify-center'>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-10 h-10 mt-4'
                    />
                </li>

                {
                    menuItems.map((item, index) => (
                        <li key={index} className='flex justify-center items-center py-2 relative hover:bg-[#252837] rounded-l-lg group transition-colors'>
                            <a className='block p-4 group-hover:bg-[#eb7c69] group-hover:text-white text-[#eb7c69] w-12 h-12 rounded-md transition-colors hover:cursor-pointer'>
                                <item.icon />
                            </a>
                            {/* <span>{item.title}</span> */}
                        </li>
                    ))
                }
            </ul>
            <div className='flex justify-center items-center py-2 relative hover:bg-[#252837] ml-2 mb-4 rounded-l-lg group'>
                <a className='block p-4 group-hover:bg-[#eb7c69] group-hover:text-white text-[#eb7c69] hover:cursor-pointer w-12 h-12 rounded-md transition-colors'>
                    <RiLogoutBoxLine />
                </a>
                {/* <span>{item.title}</span> */}
            </div>
        </div>
    )
}
