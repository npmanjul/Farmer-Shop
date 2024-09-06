import React from 'react'

const Cold_storage_navbar = () => {
    return (
        <>
            <div className='w-full bg-slate-100 h-[auto] py-4 flex justify-between items-center px-4'>

                <div className='flex justify-center items-center w-[auto] gap-5'>
                    <form class="max-w-[100px] mx-auto ">
                        <select id="countries" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected disabled>Rating</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </form>
                    <form class="max-w-[100px] mx-auto">
                        <select id="countries" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected disabled className='text-bold'>Sort by </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </form>
                </div>
                <div>
                    search box
                </div>
            </div>
        </>
    )
}

export default Cold_storage_navbar