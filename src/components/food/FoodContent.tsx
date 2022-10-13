import React, { useEffect, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { CardFood } from './CardFood';
import { OrderBar } from './OrderBar';
const FoodTabs = [
    {
        id: 1,
        name: 'All',
        active: true
    },
    {
        id: 2,
        name: 'Hot Dishes',
        active: false
    },
    {
        id: 3,
        name: 'Cold Dishes',
        active: false
    },
    {
        id: 4,
        name: 'Soup',
        active: false
    },
    {
        id: 5,
        name: 'Grill',
        active: false
    },
    {
        id: 6,
        name: 'Appetizer',
        active: false
    },
    {
        id: 7,
        name: 'Dessert',
        active: false
    },
    {
        id: 8,
        name: 'Drinks',
        active: false
    },
]

export const FoodContent = () => {
    const [tab, setTab] = useState(FoodTabs);
    const changeTab = (id: number) => {
        const updatedTabs = tab.map((each) => {
            if (each.id === id) {
                return {
                    ...each,
                    active: true,
                };
            }
            return {
                ...each,
                active: false,
            };
        });
        setTab(updatedTabs);
    }
    return (
        <main className='grid w-full grid-cols-1 lg:grid-cols-8 pl-8'>
            {/* header */}
            <header className='pt-8 pr-4 lg:col-span-6'>
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* title */}
                    <div>
                        <h1 className='text-2xl font-semibold'>Jaegar Resto</h1>
                        <p className='text-gray-300'>Tuesday, 2 Feb 2022</p>
                    </div>
                    {/* search */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="relative flex items-center"
                    >
                        <label htmlFor="search" className='absolute py-4 pr-2 pl-2'>
                            {/* <button type='submit' className='absolute left-4'> */}
                            <RiSearch2Line />
                            {/* </button> */}
                        </label>
                        <input
                            type='text'
                            name='search'
                            id='search'
                            placeholder='Search'
                            autoComplete='off'
                            className='w-full my-3 py-3 pl-9 pr-4 bg-[#2d303f] text-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb7c69] focus:ring-opacity-50'
                        />
                    </form>
                </div>
                {/* como en el modelo */}
                <div className="flex flex-col overflow-x-auto py-2 max-w-3xl col-span-8">
                    <div className="flex">
                        {
                            tab.map((tab, index) => (
                                <div key={index} className='flex items-center justify-center gap-2'>
                                    <button
                                        onClick={() => changeTab(tab.id)}
                                        className={`truncate text-white text-sm font-semibold py-2 px-4 hover:text-[#eb7c69] transition-colors border-b-2 hover:bg-[#2d303f] ${tab.active ? 'text-[#eb7c69] border-[#eb7c69] bg-[#2d303f]' : 'border-transparent'}`}>
                                        {tab.name}
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col col-span-6">
                    <div className="flex py-3 justify-between relative">
                        <h1>Choose Dishes</h1>
                        <select name="sort" id="sort" className='text-sm text-gray-300 bg-[#1f1d2b] p-2 rounded-lg border border-gray-400'>
                            <option className='py-2' value="popular">Popular</option>
                            <option className='py-2' value="newest">Newest</option>
                            <option className='py-2' value="price">Price</option>
                        </select>
                    </div>
                    <div className="place-content-center place-items-center pb-24 lg:pb-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                        <CardFood />
                    </div>
                </div>
            </header>
            {/* order bar */}
            <OrderBar />
            {/* content */}
            {/* mi diseño */}
            {/* <div className="flex flex-col overflow-x-auto py-2 max-w-3xl col-span-8">
                <div className="flex gap-2">
                    {
                        FoodTabs.map((tab, index) => (
                            <div key={index} className='flex items-center justify-center gap-2'>
                                <button className={`truncate text-white text-sm font-semibold py-2 px-4 hover:bg-[#eb7c69] transition-colors rounded-lg ${tab.active ? 'bg-[#eb7c69]' : 'bg-[#2d303f]'}`}>
                                    {tab.name}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div> */}

        </main>
    )
}
