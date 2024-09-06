import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='pb-8 pt-8 bg-gradient-to-br from-green-50/50 to-yellow-50/50 border-t border-emerald-100 w-full'>
        <div className='flex items-center justify-between p-4 pb-12 gap-12 text-sm font-medium '>
          <div className='flex-1 w-full h-0.5 bg-gray-500' />
          <div className='flex gap-4 w-min'>
            <FaInstagram className='h-6 w-6' />
            <BsGithub className='h-6 w-6' />
            <FaXTwitter className='h-6 w-6' />
            <FaLinkedin className='h-6 w-6' />
          </div>
          <div className='flex-1 h-0.5 bg-gray-500'></div>
        </div>
        <div className='pb-6'>

          <h1 className='text-center text-xl font-bold'>Farmify</h1>
          <p className='text-center text-sm text-gray-500'>
            Farmify is a platform that connects farmers with buyers and
            sellers.
          </p>
        </div>
        <div className='flex justify-center gap-4 mt-4 items-center text-xs font-medium underline'>
          <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a><a href="#">Accessibility</a><a href="#">Security</a><a href="#">Cookies</a>
        </div>
      </div>
    </>
  )
}

export default Footer