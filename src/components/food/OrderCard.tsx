import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

export const OrderCard = () => {
    return (
        <div className="flex w-full justify-between gap-2 bg-[#2d303f] px-2 py-3 rounded-lg">
            <div className="flex w-[80%] lg:w-[80%] sm:w-[90%] flex-col gap-3">

                <div className="flex gap-1.5 items-center">
                    <img
                        src='https://media.discordapp.net/attachments/839620709517230081/1029048873731227728/comida_1-removebg-preview.png'
                        alt="food"
                        className='col-span-1 h-16 object-contain rounded-full'
                    />
                    <p
                        className='truncate col-start-2 col-end-5 lg:col-end-4'
                    >
                        Salted pasta with mushroom and tomate paste
                    </p>
                    <div className="bg-[#2d303f] w-16 h-16 lg:w-10 lg:h-10 shrink-0 flex justify-center items-center rounded-xl border border-gray-700 ml-auto">
                        <p>1</p>
                    </div>
                </div>
                <input type="text"
                    className='bg-[#272735] w-full h-full rounded-xl border border-gray-700 mx-auto px-4'
                    placeholder='Order Note...'
                />
            </div>
            <div className="flex w-[20%] lg:w-[20%] sm:w-[10%] flex-col items-end gap-3">
                <p className='text-xl h-16 flex justify-center items-center'>$2.69</p>
                <button className='flex justify-center items-center lg:w-10 lg:h-10 border hover:bg-red-500 hover:text-white transition-colors border-red-500/70 text-red-500/70 p-4 text-xl lg:p-2 rounded-lg '>
                    <RiDeleteBin6Line />
                </button>
            </div>
        </div>
    )
}
