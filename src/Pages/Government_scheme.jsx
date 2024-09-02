import React from 'react'
import Blank from '../components/Common/Blank'
import FilterSidebar from '../components/Government Scheme/FilterSidebar'
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import  scheme_banner from "../image/Agriculture.jpg"
import Footer from '../components/Common/Footer/Footer';
import Search from '../components/Government Scheme/Search';
import switchTabs from '../components/Government Scheme/switchTabs';
const Government_scheme = () => {
  return (
    <>
      <div gov_wrapper>
        {/* <div className='w-[100%] h-[300px] '>
          <img className=" object-contain object-center  " src={scheme_banner} width={"100%"}   alt="" />
        </div> */}
        <div className='flex items-center h-10 bg-slate-300 w-full gap-2'>
          <NavLink to="/">
            <IoMdArrowBack size={24} />
          </NavLink>
          <p className='text-slate-900 font-serif '>Back</p>
        </div>
        <div className='md:flex '>
          <div className='' >
                  <FilterSidebar/>
          </div>
          <div className='gov-right w-[73%] bg-slate-50'>
           <Search/>
           <div class='flex items-center justify-center min-h-screen'>
<ul class="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8">
  <li class="">
    <input class="peer sr-only" type="radio" value="yes" name="answer" id="yes" checked />
    <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out" for="yes">All Schemes</label>

        <div class=" bg-white shadow-lg p-6 border mt-2 border-indigo-300 rounded-lg  mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
    </div>
  </li>

  <li class="">
    <input class="peer sr-only" type="radio" value="no" name="answer" id="no" />
    <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out" for="no">States Schemes</label>

    <div class=" bg-white shadow-lg p-6 border mt-2 border-indigo-300 rounded-lg  mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
    </div>
  </li>

  <li class="">
    <input class="peer sr-only" type="radio" value="yesno" name="answer" id="yesno" />
    <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out " for="yesno">Central Schemes</label>

    <div class=" bg-white shadow-lg p-6 border mt-2 border-indigo-300 rounded-lg  mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
    </div>
  </li>
</ul>

</div>

          </div>

        </div>

      </div>
     

    </>
  )
}

export default Government_scheme