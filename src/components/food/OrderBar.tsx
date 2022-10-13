import React, { useContext } from 'react'
import { RiCloseLine, RiDeleteBin2Line, RiDeleteBin4Fill, RiDeleteBin6Line } from 'react-icons/ri';
import { UiContext } from '../../context';
import { OrderCard } from './OrderCard';

export const OrderBar = () => {
    const { openOrder, toggleOrder } = useContext(UiContext);
    return (
        <div className={`lg:col-span-2 z-20 fixed lg:static right-0 top-0 bg-[#1f1d2b] min-h-screen w-full h-full transition-all lg:left-0 ${openOrder ? 'left-0' : 'left-full'}`}>
            <div className="relative lg:hidden">
                <RiCloseLine
                    onClick={toggleOrder}
                    className='absolute top-4 right-4 p-3 box-content text-2xl bg-[#262837] text-gray-300 cursor-pointer rounded-full'
                />
            </div>
            <div className="flex flex-col px-3.5 py-6 gap-y-3">
                <h2 className='text-2xl font-semibold'>Orders #34565</h2>
                <div className="flex flex-wrap gap-2">
                    <button className='bg-[#eb7c69] border border-transparent rounded-lg py-2 px-3'>
                        Dine In
                    </button>
                    <button className='border border-gray-600 hover:bg-[#eb7c69] rounded-lg py-2 px-3'>
                        Dine In
                    </button>
                    <button className='border border-gray-600 hover:bg-[#eb7c69] rounded-lg py-2 px-3'>
                        Dine In
                    </button>
                </div>
                <div className="flex justify-between font-semibold">
                    <div className="flex gap-8 w-[80%] lg:w-[80%] sm:w-[90%] justify-between">
                        <h2>Item</h2>
                        <h2 className='pr-6 lg:pr-2' >Qty</h2>
                    </div>
                    <h2 className='w-[20%] lg:w-[20%] sm:w-[10%] text-right'>Price</h2>
                </div>
                <div className="flex flex-col gap-2 overflow-y-auto max-h-[65vh] lg:pr-1">
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h2 className='text-lg font-semibold'>Discount</h2>
                        <h2 className='text-lg font-semibold'>$ 0</h2>
                    </div>
                    <div className="flex justify-between">
                        <h2 className='text-lg font-semibold'>Subtotal</h2>
                        <h2 className='text-lg font-semibold'>$ 100.000</h2>
                    </div>
                    <button
                        className='bg-[#eb7c69] hover:bg-[#fb5e42] text-white font-semibold py-2 rounded-lg'
                    >
                        Checkout
                    </button>

                </div>
            </div>
        </div>
    )
}
