'use client'
import '../Common/custom-scrollbar.css'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Cold_Storage_navigation() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                    {/* {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))} */}

                                    {/* phone */}
                                    <div className='flex justify-start items-start flex-col gap-4 pt-3 pb-3'>
                                        <Link to='/cropSellerForm'><button className='bg-green-500 px-6 py-3 font-semibold text-white rounded-[25px]'>Registration for Seller</button></Link>
                                        <Link to='/buyerRequirementForm'><button className='bg-blue-500 px-6 py-3 font-semibold text-white rounded-[25px]'>Registration for Buyer</button></Link>
                                    </div>
                                </ul>



                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                    <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            defaultValue={option.value}
                                                            defaultChecked={option.checked}
                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                            name={`${section.id}[]`}
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">

                                    <div className='flex justify-start items-start flex-col gap-4 pt-3 pb-3'>
                                        <Link to='/cropSellerForm'><button className='bg-green-500 px-6 py-3 font-semibold text-white rounded-[25px]'>Register your Cold Storage</button></Link>
                                    </div>
                                </ul>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    <form className="max-w-sm mx-auto pt-3">
                                        {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Select Your State</label> */}
                                        <select
                                            id="countries"
                                            className="bg-white border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option selected>Choose a State</option>
                                            <option value="US">Uttar Pradesh</option>
                                            <option value="CA">Tamil Nadu</option>
                                            <option value="FR">J&K</option>
                                            <option value="DE">Bihar</option>
                                        </select>
                                    </form>
                                </ul>

                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">

                                    <form className="max-w-sm mx-auto pt-3">
                                        {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Select Your City</label> */}
                                        <select
                                            id="countries"
                                            className="bg-white border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        >
                                            <option selected>Choose a City</option>
                                            <option value="US">Kanpur</option>
                                            <option value="CA">Prayagraj</option>
                                            <option value="FR">Lucknow</option>
                                            <option value="DE">Gorakhpur</option>
                                        </select>
                                    </form>
                                </ul>



                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3 overflow-y-scroll max-h-[1500px] custom-scrollbar rounded-[15px]"><Cold_storage_card /></div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}


import React from 'react'
import Market_place_Rating from '../Market Place/Market_place_Rating'


const storageDetails = [
    {
        product_img: "https://media.istockphoto.com/id/1301368439/photo/fruits-in-crates-ready-for-shipping-cold-storage-interior.jpg?s=612x612&w=0&k=20&c=GCNiTCGPcqKSlvWmlg-vu6nYEjoP_R81Pwa8p9AYYxQ=",
        storage_name: "Royal Ref Enterprises",
        storage_verification: "Verifed",
        city_name: "Gorakhpur",
        state_name: "Uttar Pradesh"

    },
    {
        product_img: "https://media.istockphoto.com/id/1301368439/photo/fruits-in-crates-ready-for-shipping-cold-storage-interior.jpg?s=612x612&w=0&k=20&c=GCNiTCGPcqKSlvWmlg-vu6nYEjoP_R81Pwa8p9AYYxQ=",
        storage_name: "VMT  Enterprises",
        storage_verification: "Verifed",
        city_name: "Prayagraj",
        state_name: "Uttar Pradesh"

    },
]

const Cold_storage_card = () => {
    return (
        <>
            {storageDetails.map((storageDetail, index) => (
                <div
                    key={index}
                    className="h-[auto] w-[full flex justify-center items-center py-4"
                >
                    <div className="h-[auto] w-[100%] bg-gray-100 flex justify-center items-center px-4 py-4 rounded-[15px]">
                        <div>
                            <img
                                src={storageDetail.product_img}
                                alt=""
                                className="w-[500px] h-[200px] rounded-[10px]"
                            />
                        </div>
                        <div className="w-[100%] h-[100%] py-1 px-7">
                            <div className="flex justify-evenly items-start flex-col gap-1">
                                <div className=" flex justify-center item-center gap-3">
                                    <div className="text-3xl font-semibold text-black">{storageDetail.storage_name}</div>
                                    <div className="flex justify-center item-center border border-gray-500 px-5 text-gray-500 rounded-[50px] h-[100%] mt-2 font-semibold">{storageDetail.storage_verification}</div>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <div className='bg-green-700 px-2 py-1 font-semibold text-white rounded-[10px]'>3.5</div>
                                    <div><Market_place_Rating /></div>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <div className="font-semibold text-black">
                                        Price :{" "}
                                        <span className="font-semibold text-gray-500">
                                            Rs {storageDetail.product_price} (Per Kg)
                                        </span>{" "}
                                    </div>
                                    <div>Rating</div>
                                </div>
                                <div className="flex justify-center items-center gap-4">
                                    <div className="font-semibold text-black">
                                        City:{" "}
                                        <span className="font-semibold text-gray-500">
                                            {storageDetail.city_name}
                                        </span>
                                    </div>
                                    <div className="font-semibold text-black">
                                        State:{" "}
                                        <span className="font-semibold text-gray-500">
                                            {storageDetail.state_name}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-center item-center gap-3">
                                    <button className="py-[7px] px-[15px] bg-green-500 font-semibold text-white rounded-[50px]">
                                        Book Now
                                    </button>
                                    <button className="py-[7px] px-[15px] bg-green-500 font-semibold text-white rounded-[50px]">
                                        View Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cold_Storage_navigation


