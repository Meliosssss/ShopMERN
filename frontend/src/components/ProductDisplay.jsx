import React, { useContext } from 'react'
import product_rt_1 from '../assets/product_rt_1.png'
import product_rt_2 from '../assets/product_rt_2.png'
import product_rt_3 from '../assets/product_rt_3.png'
import product_rt_4 from '../assets/product_rt_4.png'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { ShopContext } from '../context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <section className='flex flex-col gap-8 xl:flex-row'>
            <div className='flex gap-x-2 xl:flex-1'>
                <div className='flex flex-col gap-[7px] flex-wrap'>
                    <img src={product_rt_1} alt='prdctImg' className='max-h-[99px] rounded-lg' />
                    <img src={product_rt_2} alt='prdctImg' className='max-h-[99px] rounded-lg' />
                    <img src={product_rt_3} alt='prdctImg' className='max-h-[99px] rounded-lg' />
                    <img src={product_rt_4} alt='prdctImg' className='max-h-[99px] rounded-lg' />
                </div>
                <div>
                    <img src={product.image} alt='' className='rounded-xl' />
                </div>
            </div>
            <div className='flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl'>
                <h3 className='h3 sm:line-clamp-1'>{product.name}</h3>
                <div className='flex items-end gap-x-2 medium-20'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <p>(123)</p>
                </div>
                <div className='flex items-baseline gap-x-6 bold-28 sm:bold-32 mt-4'>
                    <div>${product.new_price}</div>
                    <div className='bold-20 sm:bold-28 line-through text-secondary'>${product.old_price}</div>
                </div>
                <div>
                    <div className='flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6'>
                        <div>
                            <h4 className='bold-16'>Select Color:</h4>
                            <div className='flex gap-3 my-3'>
                                <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed'></div>
                                <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryYellow'></div>
                                <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryBlue'></div>
                                <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='bold-16'>Select Size:</h4>
                            <div className='flex gap-3 my-3'>
                                <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md'>S</div>
                                <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md'>M</div>
                                <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md'>L</div>
                                <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md'>XL</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 mb-8 max-w-[555px]'>
                        <button onClick={() => { addToCart(product.id) }} className='btn-dark rounded-md'>Add to cart</button>
                        <button className='btn-dark-outline rounded-md'>Buy it now</button>
                    </div>
                    <p><span className='medium-16 text-tertiary'>Category: </span>Woman | Jacket | Winter</p>
                    <p><span className='medium-16 text-tertiary'>Tags: </span>Modern | Latest </p>
                </div>
            </div>
        </section>
    )
}

export default ProductDisplay