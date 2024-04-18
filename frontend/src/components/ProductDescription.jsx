import React from 'react'

const ProductDescription = () => {
    return (
        <div className='mt-12'>
            <div className='flex gap-3 mb-4'>
                <button className='btn-dark rounded-full !text-xs !py-[6px] w-36 '>Description</button>
                <button className='btn-white rounded-full !text-xs !py-[6px] w-36 '>Cart Guide</button>
                <button className='btn-white rounded-full !text-xs !py-[6px] w-36 '>Size Guide</button>
            </div>
            <div className='flex flex-col pb-16'>
                <p className='text-sm'>123</p>
                <p className='text-sm'>234</p>
            </div>
        </div>
    )
}

export default ProductDescription