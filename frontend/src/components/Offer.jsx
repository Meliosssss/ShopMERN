import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Offer = () => {
    return (
        <section className='max-padd-container mb-16'>
            <div className='max-padd-container text-white bg-banneroffer bg-center bg-cover w-full px-4 py-16 xl:py-36 mt-16 rounded-3xl'>
                <h2 className='h2'>Summer Sale 50%</h2>
                <h4 className='medium-32 capitalize font-normal'>Women's <span className='text-secondary'>Budget Beauty </span>Boutique</h4>
                <Link to={''} className='text-tertiary bg-white pl-6 rounded-full flexBetween gap-x-2 medium-16 w-44 mt-10 group'>Go to Shop<FaArrowRightLong className='text-xl bg-secondary text-primary rounded-full h-12 w-12 p-4 group-hover:-rotate-45 transition-all duration-500 border-dashed border border-white ' /></Link>
            </div>
        </section>
    )
}

export default Offer