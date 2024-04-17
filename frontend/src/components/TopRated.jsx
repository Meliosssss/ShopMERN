import React from 'react'
import ctgBanner from '../assets/ctg-banner.jpg'
import men from '../assets/men.png'
import women from '../assets/women.png'
import kid from '../assets/kid.png'
import { Link } from 'react-router-dom'

const TopRated = () => {
    return (
        <section className='max-padd-container py-14 xl:py-24'>
            <div className='grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
                <div className='hidden xl:flex ring-1 ring-slate-900/5 rounded-3xl overflow-hidden shadow-sm'>
                    <div>
                        <img src={ctgBanner} alt='ctg Banner' />
                    </div>
                </div>
                <div>
                    <div className='ring-1 ring-slate-900/5 rounded-3xl bg-secondaryBlue text-white'>
                        <img src={men} alt='' className='rounded-3xl' />
                    </div>
                    <div className='px-5'>
                        <h4 className='medium-18 mt-4'>Top Rated</h4>
                        <p className='my-2'>123</p>
                        <Link to={'/mens'} className='bold-15 text-secondary'>View more</Link>
                    </div>
                </div>
                <div>
                    <div className='ring-1 ring-slate-900/5 rounded-3xl bg-secondaryRed text-white'>
                        <img src={women} alt='' className='rounded-3xl' />
                    </div>
                    <div className='px-5'>
                        <h4 className='medium-18 mt-4'>Top Rated</h4>
                        <p className='my-2'>123</p>
                        <Link to={'/mens'} className='bold-15 text-secondary'>View more</Link>
                    </div>
                </div>
                <div>
                    <div className='ring-1 ring-slate-900/5 rounded-3xl bg-secondaryGreen text-white'>
                        <img src={kid} alt='' className='rounded-3xl' />
                    </div>
                    <div className='px-5'>
                        <h4 className='medium-18 mt-4'>Top Rated</h4>
                        <p className='my-2'>123</p>
                        <Link to={'/mens'} className='bold-15 text-secondary'>View more</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopRated