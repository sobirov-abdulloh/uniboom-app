import React from 'react'
import iphone from '../../../assets/images/iPhone 13 Pro Mockup Right View.png'
import scaner from '../../../assets/images/scaner.jpg'
import googli from '../../../assets/icons/Google Play11.svg'
import appicon from '../../../assets/icons/appicon.svg'

function HomePageAdsBottom(props) {
  return (
    <div>
      <div className="w-full bg-blue-300 flex rounded-xl my-14 px-24 py-8 items-center justify-between">
        <div className="w-1/2 ">
          <h3 className="text-md text-white-100 font-bold">
            Ilovani ko'chiring va chegirma hamda <br /> aksiyalar haqida
            birinchi bo'lib biling!
          </h3>
          <div className="flex pt-4">
            <button className="ml-1 px-5 py-1 flex items-center bg-white-100  rounded-md">
              <img src={googli} alt="" />
              <div className="text-left pl-2">
                <h6 className="text-base font-normal  text-[13px]">
                  GET IT ON
                </h6>
                <h5 className="text-base font-bold">Google Play</h5>
              </div>
            </button>
            <button className="ml-4 px-5 py-1  flex items-center bg-white-100  rounded-md">
              <img src={appicon} alt="" />
              <div className="text-left pl-2">
                <h6 className="font-normal text-[13px]">Available-on-the</h6>
                <h5 className="text-base font-bold">App Store</h5>
              </div>
            </button>
          </div>
        </div>
        <div className=" flex text-right">
          <div className="w-full justify-between items-center text-center">
            <div className=" mr-4 relative">
              <img
                className="absolute left-[-300px] top-[-70px]"
                src={iphone}
                alt=""
              />
            </div>
            <div className=" flex items-center  text-right ">
              <img src={scaner} alt="" />
              <h4 className="ml-8 text-white-100 text-left text-md font-semibold">
                Yuklab olish <br /> uchun QR kod
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageAdsBottom
