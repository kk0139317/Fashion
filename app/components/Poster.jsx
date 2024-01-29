import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Poster() {
  return (
    <section className=' w-full absolute left-0 h-auto bg-amber-300  sm:flex ' >
    
    <div className='hidden align-middle ml-auto  sm:flex '>
    <Image 
    src={'/assets/img/model-4.png'} 
    width={500} 
    height={800} 
    className=' mt-auto ml-auto '
    />
    </div>
    <div className='flex flex-col '>
      <div className=' text-2xl sm:text-5xl  font-extrabold  m-10  flex flex-col' >
        <div className='bg-white mt-2 p-2 sm:mt-10 my-2 w-60 -rotate-3 '>
        PAYDAY
        </div > 
        <span className=' my-0 sm:my-2'>
        SALE NOW
        </span > 
      </div>
      <span className='mx-12 mb:0 -mt-10 sm:mb-5 sm:-mt-5' >
      Spend minimal $100 get 30% off voucher code for your next purchase
      </span> 
      <span className='mx-12 mb:0 mt-5 sm:mb-5 sm:mt-0 font-semibold'  >
      1 June - 10 June 2021 <br />
*Terms & Conditions apply
      </span> 
      <Link href={"#"} className=' mx-10 text-center py-3 rounded-lg my-2 sm:mb-10 mb-16 bg-black text-white w-40 ' >
         SHOP NOW
      </Link>
    </div>
  </section>
  )
}

export default Poster