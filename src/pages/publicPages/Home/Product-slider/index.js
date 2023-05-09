/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'
import {products} from '../../../../datas/products'
import RecommendSlider from '../../../../components/RecommendSlider/RecommendSlider.jsx'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import {Pagination, Navigation} from 'swiper'

export default function App() {
  const recomended = products.filter(
    Curdata => Curdata.category === 'Recommend',
  )
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <>
      <h3 className="text-2xl font-semibold text-black leading=[120%]">
        Рекомендуем вам
      </h3>
      <div className="wrap_slide flex relative justify-between items-center">
        <div className="pagenation flex my-5">
          <h5 className="py-2 px-4 bg-gray-200 mr-5 rounded text-gray-100 hover:bg-blue-300 hover:text-white-100">
            Товары со скидкой
          </h5>
          <h5 className="py-2 px-4 bg-gray-200 mr-5 rounded text-gray-100 hover:bg-blue-300 hover:text-white-100">
            Товары по рассрочке
          </h5>
          <h5 className="py-2 px-4 bg-gray-200 mr-5 rounded text-gray-100 hover:bg-blue-300  hover:text-white-100">
            Топ продаж
          </h5>
        </div>
        <div className="navigation flex">
          <div ref={navigationPrevRef}>
            <i className="fa-solid fa-chevron-left py-3 px-[15px] bg-blue-400 rounded text-white-300 hover:bg-blue-200 hover:cursor-pointer"></i>
          </div>
          <div ref={navigationNextRef}>
            <i className="fa-solid fa-chevron-right py-3 px-[15px] bg-blue-400 rounded text-white-300 hover:bg-blue-200 hover:cursor-pointer ml-[20px]"></i>
          </div>
        </div>
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
            <RecommendSlider {...post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
