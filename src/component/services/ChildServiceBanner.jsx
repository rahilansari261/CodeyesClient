import React from 'react'
import Accordion from '../home/Accordion'

export default function ChildServiceBanner() {
    return (
        <>
            <div className={`pt-6 sm:pt-12 xl:pt-16 rounded-b-[30px]`}>
                {/* <div className={`pt-6 sm:pt-12 xl:pt-16 bg-[#f0ead8] rounded-b-[50px]`}> */}
                <div className={`grid lg:grid-cols-12 custom_container px-8 gap-y-10 sm:gap-y-20 !pb-0`}>
                    <div className={`lg:col-span-7 h-full content-around relative`}>
                        <img src="/image/home/happy.webp" alt="Error" className={`absolute right-40 lg:-right-12 lg:top-20 z-0 hidden sm:block`} />
                        <h1 className={`sm:w-[83%] lg:w-full text-5xl sm:text-[60px] sm:!leading-[65px] xl:text-[64px] xl:leading-[60px] lg:leading-[74px] font-semibold z-10 relative`}>We Create Memorable Moments For Brands.</h1>
                        <img src="/image/home/banner-1.webp" alt="Error" className={`absolute sm:-left-6 `} />
                    </div>
                    <div className={`lg:col-span-5`}>
                        <img src="/image/banner/banner.png" alt="Error" className={`w-fit m-auto lg:w-full h-full z-20`} />
                    </div>
                </div>
                <Accordion />
            </div>
        </>
    )
}
