import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const AnimatedText = ({ text, link }) => {
    return (
        <div className="relative group">
            <Link to={link} className='flex items-center gap-2'>
                <GoDotFill className="fill-[#f8a065] absolute left-0 opacity-0 transition-all duration-500 ease-in-out transform -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
                <span className="transition-all duration-500 ease-in-out group-hover:ml-6 font-semibold text-xl ">{text}</span>
            </Link>
        </div>
    )
}
export default function AllServices() {
    return (
        <>
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20`}>
                <div className={`col-span-1`}>
                    <div className={`flex flex-col gap-20`}>
                        <div className={`space-y-3 group cursor-pointer`}>
                            <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                <img src="/image/portfoilo/port1.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                            </div>
                            <AnimatedText text={`Main Home`} link={`#`} />
                        </div>
                        <div className={`space-y-3 group cursor-pointer`}>
                            <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                <img src="/image/portfoilo/port4.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                            </div>
                            <AnimatedText text={`App Showcase`} link={`#`} />
                        </div>
                        <div className={`space-y-3 group cursor-pointer`}>
                            <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                <img src="/image/portfoilo/port7.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                            </div>
                            <AnimatedText text={`Portfolio Accordion`} link={`#`} />
                        </div>
                    </div>
                </div>
                <div className={`col-span-1`}>
                    <div className={`flex flex-col gap-20`}>
                        <div className={`space-y-3 group cursor-pointer`}>
                            <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                <img src="/image/portfoilo/port2.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                            </div>
                            <AnimatedText text={`Main Home`} link={`#`} />
                        </div>
                        <div className={`space-y-3 group cursor-pointer`}>
                            <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                <img src="/image/portfoilo/port5.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                            </div>
                            <AnimatedText text={`Portfolio Accordion`} link={`#`} />
                        </div>
                        <div className={`space-y-3 group cursor-pointer`}>
                            <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                <img src="/image/portfoilo/port8.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                            </div>
                            <AnimatedText text={`App Showcase`} link={`#`} />
                        </div>
                    </div>
                </div>
                <div className={`col-span-1`}>
                    <div className={`flex flex-col gap-20`}>
                        <div className={`space-y-3 group cursor-pointer`}>
                            <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                <img src="/image/portfoilo/port3.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                            </div>
                            <AnimatedText text={`Portfolio Accordion`} link={`#`} />
                        </div>
                        <div className={`space-y-3 group cursor-pointer`}>
                            <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                <img src="/image/portfoilo/port6.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                            </div>
                            <AnimatedText text={`Main Home`} link={`#`} />
                        </div>
                        <div className={`space-y-3 group cursor-pointer`}>
                            <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                <img src="/image/portfoilo/port9.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                            </div>
                            <AnimatedText text={`App Showcase`} link={`#`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
