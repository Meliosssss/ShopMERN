import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import { VscSettings } from 'react-icons/vsc';
import Item from '../components/Item';

const Category = ({ category, banner }) => {

    const { all_products } = useContext(ShopContext);

    return (
        <section className='max-padd-container'>
            <div>
                <div className='max-sm:mt-4'>
                    <img src={banner} alt='bannerImg' className='block mb-7 mx-auto rounded-3xl' />
                </div>
                <div className='flexBetween my-10 mx-2'>
                    <h5><span className='font-bold'>Showing 1 - 12 </span>out of 36 products</h5>
                    <Link to={'/'}><VscSettings className='text-3xl bg-tertiary rounded-md h-10 w-10 p-2 text-white' /></Link>
                </div>
                <div className='max-padd-container bg-primary rounded-3xl py-8'>
                    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {all_products.map((item) => {
                            if (category === item.category) {
                                return (
                                    <Item key={item.id} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                                )
                            }
                        })}
                    </div>
                    <div className='mt-16 text-center'>
                        <button className='btn-white rounded-full'>Load more...</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category