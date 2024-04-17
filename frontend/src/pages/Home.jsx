import React from 'react'
import Hero from '../components/Hero'
import TopRated from '../components/TopRated'
import Popular from '../components/Popular'
import Offer from '../components/Offer'
import NewCollections from '../components/NewCollections'

const Home = () => {
    return (
        <>
            <Hero />
            <TopRated />
            <Popular />
            <Offer />
            <NewCollections />
        </>
    )
}

export default Home