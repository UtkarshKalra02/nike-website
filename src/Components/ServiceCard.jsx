import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full
    rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 justify-center
        items-center bg-coral-red rounded-full'>
            <img src={imgURL} width={24} height={24}/>
        </div>
        <h3 className='font-palanquin text-2xl font-bold mt-6'>{label}</h3>
        <p className='mt-4 text-gray-500 font-montserrat'>{subtext}</p>
    </div>
  )
}

export default ServiceCard