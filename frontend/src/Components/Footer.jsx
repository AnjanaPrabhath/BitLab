import React from 'react'
import Logo from '../Assets/Logo.png'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    
    <div className='max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
           <img src={Logo} className='h-[60px] mt-8' alt="logo" />
           <p className='py-4 pr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe quidem rem provident ducimus sint corporis ab incidunt ut dolore?</p>
           <div className='flex md:w-[75%] my-6 justify-between'>
            <FaDribbbleSquare size={30}/>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaTwitterSquare size={30}/>
           </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-10'>

            <div>
                <h6 className='font-medium text-gray-400'>Coding</h6>
                <ul>
                    <li className='py2 text-sm'>languages</li>
                    <li className='py2 text-sm'>Business</li>
                    <li className='py2 text-sm'>Reseaches</li>
                    <li className='py2 text-sm'>Contact</li>
                    <li className='py2 text-sm'>Insights</li>
                    <li className='py2 text-sm'>Withdraw</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py2 text-sm'>Finance</li>
                    <li className='py2 text-sm'>Business</li>
                    <li className='py2 text-sm'>Problems</li>
                    <li className='py2 text-sm'>Involve</li>
                    <li className='py2 text-sm'>Pricing</li>
                    <li className='py2 text-sm'>Academic</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>social</h6>
                <ul>
                    <li className='py2 text-sm'>facebook</li>
                    <li className='py2 text-sm'>instargram</li>
                    <li className='py2 text-sm'>twitter</li>
                    <li className='py2 text-sm'>Blogger</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py2 text-sm'>Jobs</li>
                    <li className='py2 text-sm'>Money</li>
                    <li className='py2 text-sm'>Legal</li>
                    <li className='py2 text-sm'>Address</li>
                    <li className='py2 text-sm'>Activities</li>
                    <li className='py2 text-sm'>Help</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer