import React from 'react'
import Blank from '../components/Common/Blank'
import FilterSidebar from '../components/Government Scheme/FilterSidebar'
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import scheme_banner from "../image/Agriculture.jpg"
import Footer from '../components/Common/Footer/Footer';
import Search from '../components/Government Scheme/Search';
import switchTabs from '../components/Government Scheme/switchTabs';
const Government_scheme = () => {
  return (
    <>
      <div className=''>
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
          <div className=' w-[24vw]' >
            <FilterSidebar />
          </div>
          <div className='gov-right w-[73%] bg-slate-50'>
            <Search />
            <div class='flex items-center justify-center min-h-screen'>
              <ul class="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8">
                <li class="">
                  <input class="peer sr-only" type="radio" value="yes" name="answer" id="yes" checked />
                  <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out" for="yes">All Schemes</label>
                  <h2 className=' text-slate-600 w-[60vw] my-3 mx-5'> We found 432 schemes based on  your  preferences</h2>
                  <div class=" bg-white w-[60vw] shadow-lg p-6 border mt-2 border-indigo-300 rounded-lg  mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    <div className='flex flex-col gap-2'>


                      <h1 className='font-semibold text-xl'>Pradhan Mantri Fasal Bima Yojana (PMFBY)</h1>
                      <p>PMFBY was launched in 2016 in order to provide a simple and affordable crop insurance product to ensure comprehensive risk cover for crops to farmers against all non-preventable natural risks from pre-sowing to post-harvest and to provide adequate claim amount. </p>

                      <a className='text-blue-600 ' href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012"> Details</a>
                    </div>


                  </div>

                  <div class=" bg-white w-[60vw] shadow-lg p-6 border mt-2 border-indigo-300 rounded-lg  mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    <div className='flex flex-col gap-2'>


                      <h1 className='font-semibold text-xl'>Agriculture Infrastructure Fund (AIF)</h1>
                      <p>In order to address the existing infrastructure gaps and mobilize investment in agriculture infrastructure, Agri Infra Fund was launched under Aatmanirbhar Bharat Package. AIF was introduced with a vision to transform the agriculture infrastructure landscape of the country.  </p>

                      <a className='text-blue-600 ' href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012"> Details</a>
                    </div>



                  </div>
                  <div class=" bg-white w-[60vw] shadow-lg p-6 border mt-2 border-indigo-300 rounded-lg  mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    <div className='flex flex-col gap-2'>


                      <h1 className='font-semibold text-xl'>Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)</h1>
                      <p>Pradhan Mantri Kisan Maandhan Yojna (PMKMY) is a central sector scheme launched on 12th September 2019 to provide security to the most vulnerable farmer families. PM-KMY is contributory scheme, small and marginal farmers (SMFs), subject to exclusion criteria, can opt to become member of the scheme by paying monthly subscription to the Pension Fund.</p>

                      <a className='text-blue-600 ' href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012"> Details</a>
                    </div>



                  </div>
                  <div class=" bg-white w-[60vw] shadow-lg p-6 border mt-2 border-indigo-300 rounded-lg  mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    <div className='flex flex-col gap-2'>


                      <h1 className='font-semibold text-xl'>Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)</h1>
                      <p>Pradhan Mantri Kisan Maandhan Yojna (PMKMY) is a central sector scheme launched on 12th September 2019 to provide security to the most vulnerable farmer families. PM-KMY is contributory scheme, small and marginal farmers (SMFs), subject to exclusion criteria, can opt to become member of the scheme by paying monthly subscription to the Pension Fund.</p>

                      <a className='text-blue-600 ' href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012"> Details</a>
                    </div>



                  </div>
                </li>

                <li class="">
                  <input class="peer sr-only" type="radio" value="no" name="answer" id="no" />
                  <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out" for="no">States Schemes</label>

                  <div class=" bg-white   w-[60vw] shadow-lg p-6 border mt-14 border-indigo-300 rounded-lg  mx-[-20vw] transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    <div className='flex flex-col gap-2 w-[60vw]'>


                      <h1 className='font-semibold text-xl'>Agriculture Infrastructure Fund (AIF)</h1>
                      <p>In order to address the existing infrastructure gaps and mobilize investment in agriculture infrastructure, Agri Infra Fund was launched under Aatmanirbhar Bharat Package. AIF was introduced with a vision to transform the agriculture infrastructure landscape of the country.  </p>

                      <a className='text-blue-600 ' href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012"> Details</a>
                    </div>



                  </div>
                </li>

                <li class="">
                  <input class="peer sr-only" type="radio" value="yesno" name="answer" id="yesno" />
                  <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out " for="yesno">Central Schemes</label>

                  <div class=" bg-white w-[60vw] mx-[-40vw] shadow-lg p-6 border mt-14 border-indigo-300 rounded-lg transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                    <div className='flex flex-col gap-2'>


                      <h1 className='font-semibold text-xl'>Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)</h1>
                      <p>Pradhan Mantri Kisan Maandhan Yojna (PMKMY) is a central sector scheme launched on 12th September 2019 to provide security to the most vulnerable farmer families. PM-KMY is contributory scheme, small and marginal farmers (SMFs), subject to exclusion criteria, can opt to become member of the scheme by paying monthly subscription to the Pension Fund.</p>

                      <a className='text-blue-600 ' href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012"> Details</a>
                    </div>



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