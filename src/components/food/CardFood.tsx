import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'

export const CardFood = () => {
    return (
        <div
            className="w-64 lg:w-56 h-80 pt-16 bg-cover bg-center rounded-lg relative transition-shadow hover:shadow-md shadow-gray-400 hover:cursor-pointer"
        >
            <div className="w-full h-full pb-10 bg-[#1f1d2b] rounded-lg">
                <img
                    src="https://media.discordapp.net/attachments/839620709517230081/1029048873731227728/comida_1-removebg-preview.png"
                    alt="food"
                    className='w-full h-36 absolute top-5 object-contain rounded-full'
                />
                <div className='pt-[108px] text-center flex flex-col gap-3'>
                    <h1 className='text-lg font-semibold text-white'>Spicy seaseoned <br></br> seafood noodles</h1>
                    <p className='text-sm text-gray-300'>$ 100.000</p>
                    <p className='text-gray-400'>20 Bowls avalible</p>
                </div>
                {/* <div className="flex justify-between">
                    <button className='px-3 py-1 text-sm text-white bg-[#eb7c69] rounded-lg'>
                        Add
                    </button>
                    <button className='px-3 py-1 text-sm text-white bg-[#eb7c69] rounded-lg'>
                        <RiShoppingCart2Line />
                    </button>
                </div> */}

            </div>
        </div>
    )
}
