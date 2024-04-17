import React from 'react'
import Item from './Item'
import LATEST from '../assets/latest.js';

const NewCollections = () => {
    return (
        <section className='max-padd-container'>
            <div className='bg-primary rounded-3xl py-12 xl:py-28'>
                <div className='w-[90%] mx-auto'>
                    <h3 className='h3 font-ace text-secondary'>Latest <span className='font-ace font-[300] regular-20 text-tertiary'>Products</span></h3>
                    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-16'>
                        {LATEST.map((item) => (
                            <Item key={item.id} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewCollections