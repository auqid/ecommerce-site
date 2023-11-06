import React from 'react'
import { Link } from 'react-router-dom'

const navigations =[
  {
    name:'Home',
    path:'/'
  },
  {
    name:'Products',
    path:'/products'
  },
  {
    name:'About',
    path:'/about'
  },
  {
    name:'Contact',
    path:'/contact'
  }
]

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    {/**linking to the main page  */}
    <Link to={`/`}className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">AZ</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {/**mapping the navigations path on our links */}
      {navigations.map((navigation)=>{
        return (
          <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
        )
      })}
    </nav>
    <Link to={'/cart'}>
    <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Cart
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>
    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
    </div>
  )
}

export default Header
