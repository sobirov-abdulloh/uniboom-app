import React from 'react'
import Homebannerleft from './Homebannerleft.jsx'
import Homebannerright from './Homebannerright.jsx'
import HomePageAds from './HomepageAds.jsx'
import HomePageAdsBottom from './HomePageAdsBottom.jsx'
import Slider from './Product-slider/index'
import NewProduct from './Product-slider/newProduct.jsx'

function Home() {
  return (
    <div>
      <div className="w-full grid  grid-cols-4 my-12 gap-6">
        <Homebannerleft />
        <Homebannerright />
      </div>
      <Slider />

      <HomePageAds bgColor="bg-red-500" />
      <NewProduct about="Новые товары" seeAll="Все товары" />
      <HomePageAds bgColor="bg-yellow" />
      <NewProduct />
      <HomePageAdsBottom />
    </div>
  )
}

export default Home
