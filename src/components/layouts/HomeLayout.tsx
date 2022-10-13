import React, { FC } from 'react'
import { BottomBar } from '../ui/BottomBar'
import { Sidebar } from '../ui/Sidebar'

interface Props {
    children: React.ReactNode
}
export const HomeLayout: FC<Props> = ({ children }) => {
    return (
        <div className=''>
            <Sidebar />
            <div className='lg:pl-20 bg-[#252837] min-h-screen text-white'>
                {children}
            </div>
            <BottomBar />
        </div>
    )
}
