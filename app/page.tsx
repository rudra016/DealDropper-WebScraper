
import React from 'react'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import HeroCarousel from '@/components/HeroCarousel'
import { getAllProducts } from '@/lib/actions'
import ProductCard from '@/components/ProductCard'

const Home = async () => {
  const allProducts = await getAllProducts();


  return (
    <>
    <section className='px-6  md:px-20 py-24'>
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>
          <p className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
            Smart Shopping Starts Here : 
           
          </p>
          <h1 className='head-text'>Unleash the Power of <br /><span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>DealDropper</span>
          </h1>
          <p className='mt-6'>
            Get the best deals on your favorite products. <br />
            Save money and time with our smart shopping platform.
          </p>

          <SearchBar />
        </div>

        <HeroCarousel />
      </div>
    </section>

    <section className='trending-section'>
      <h2 className='section-text'>Trending</h2>

      <div className='flex flex-wrap gap-x-8 gap-y-16'>
      {allProducts?.map((product) => (
        <ProductCard key={product._id} product = {product}  />
      ))}
      </div>
    </section>
    </>
  )
}

export default Home
