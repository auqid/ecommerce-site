import React from 'react'
import { Link } from 'react-router-dom'
const FeatureCard = ({cards}) => {


    
  return (
    <div >
      <section className="text-gray 700 body-font">
  <div className="container px-1 py-1 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Categories</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {
        cards?.map((card)=>{
          return(
            <Link to={`/categories/${card}`} className="p-7 md:w-1/2 cursor-pointer ">
        <div className="flex rounded-lg h-full bg-gray-100 p-2 flex-col  ">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium capitalize  ">{card ||'Example Card'}</h2>
          </div>
        </div>
      </Link>
          )

        })
      }
      
    </div>
  </div>
</section>
    </div>
  )
}

export default FeatureCard
