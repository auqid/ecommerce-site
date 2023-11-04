import React from 'react'

const Product = ({products}) => {
  return (
    <div>
<section className="text-gray-400  body-font ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
      {/**product prop caught here and mapped on our component */}
      {
        products.map((product)=>{
          console.log(product,'product')
          const{id,title,price,description,category,image}= product;
          return(

          <div  key={id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md mb-5 cursor-pointer">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt={id} className="object-contain object-center w-full h-full block"src={image}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
          <h2 className="text-black title-font text-lg font-medium">{title}</h2>
          <p className="mt-1 text-black">${price}</p>
        </div>
      </div>
      )

        })
      }
    </div>
  </div>
</section>



    </div>
  )
}

export default Product