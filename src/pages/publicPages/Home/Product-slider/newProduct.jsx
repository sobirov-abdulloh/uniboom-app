/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
import {products} from '../../../../datas/products'
import NewProduct from '../../../../components/NewProduct/NewProduct.jsx'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import {Pagination, Navigation} from 'swiper'

export default function App({about, seeAll}) {
  const recomended = products.filter(
    Curdata => Curdata.category === 'NewProduct',
  )
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <>
      <div className="titles flex justify-between items-baseline">
        <h3 className=" mb-[20px] text-2xl font-semibold text-black leading=[120%]">
          {about}
        </h3>
        <h3 className="text-blue-200">{seeAll}</h3>
      </div>
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={swiper => {
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = navigationPrevRef.current
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = navigationNextRef.current
        }}
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {recomended.map(post => (
          <SwiperSlide key={post.id}>
            <NewProduct {...post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
