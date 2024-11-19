import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DotGrid from '../common/Dot';
import { GoDotFill } from 'react-icons/go';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpen2, setIsDrawerOpen2] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const location = useLocation();

  const currentPathname = location.pathname;
  const handleMouseEnter = () => {
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubmenuOpen(false);
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const toggleDrawer2 = () => {
    setIsDrawerOpen2(!isDrawerOpen2);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const closeDrawer2 = () => {
    setIsDrawerOpen2(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`bg-[#fbfaf5] transition-all duration-300 ease-in-out`}
      // className={`${isSticky ? 'sticky-header' : ''}  bg-[#fbfaf5] transition-all duration-300 ease-in-out`}
      // className={`${currentPathname === '/contact' ? 'border-b border-gray-400' : 'bg-[#f0ead8]'} ${isSticky ? 'sticky-header' : ''} transition-all duration-300 ease-in-out`}
      >
        <div className={`grid grid-cols-12 lg:gap-10 custom_container items-center !py-3`}>
          <div className={`col-span-6 lg:col-span-3`}>
            <Link to={`/`} className={``}>
              <img src="/image/logo.png" alt="Error" className='w-[120px]' />
            </Link>
          </div>
          <div className={`hidden lg:block col-span-9`}>
            <div className={`w-full flex justify-end`}>
              <div className={`flex gap-8 xl:gap-16 font-semibold items-center`}>
                <p className='cursor-pointer nav_link1'><Link to="/">HOME</Link>
                  <span className={`hover_img1 ${currentPathname === '/' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span>
                </p>
                <p className='cursor-pointer nav_link2'><Link to="/about">ABOUT</Link>
                  <span className={`hover_img2 ${currentPathname === '/about' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <p
                    className="cursor-pointer nav_link2"
                  >
                    <Link to="/services">SERVICES</Link>
                    <span className={`hover_img2 ${currentPathname === '/services' ? '!block' : ''}`}>
                      <svg className="qodef-svg--menu-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153">
                        <path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path>
                      </svg>
                    </span>
                  </p>

                  {isSubmenuOpen && (
                    <div className={`submenu ${isSubmenuOpen ? 'show' : ''}`}>
                      <ul>
                        <li className="relative group">
                          <Link to="/services/facebook-ads" className='flex items-center gap-2'>
                            <GoDotFill className="fill-[#f8a065] absolute left-0 opacity-0 transition-all duration-500 ease-in-out transform -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
                            <span className="transition-all duration-500 ease-in-out group-hover:ml-6">Facebook Ads</span>
                          </Link>
                        </li>
                        <li className="relative group">
                          <Link to="/services/ppc" className='flex items-center gap-2'>
                            <GoDotFill className="fill-[#f8a065] absolute left-0 opacity-0 transition-all duration-500 ease-in-out transform -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
                            <span className="transition-all duration-500 ease-in-out group-hover:ml-6">PPC</span>
                          </Link>
                        </li>
                        <li className="relative group">
                          <Link to="/services/email-marketing" className='flex items-center gap-2'>
                            <GoDotFill className="fill-[#f8a065] absolute left-0 opacity-0 transition-all duration-500 ease-in-out transform -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
                            <span className="transition-all duration-500 ease-in-out group-hover:ml-6">Email Marketing</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <p className='cursor-pointer nav_link3'><Link to="/portfolio">PORTFOLIO</Link>
                  <span className={`hover_img3 ${currentPathname === '/portfolio' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
                <p className='cursor-pointer nav_link4'><Link to="/faq">FAQs</Link>
                  <span className={`hover_img4 ${currentPathname === '/faq' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
                <p className='cursor-pointer nav_link5'><Link to="/blog">BLOG</Link>
                  <span className={`hover_img5 ${currentPathname === '/blog' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
                <p className='cursor-pointer nav_link6'><Link to="/contact">CONTACT</Link>
                  <span className={`hover_img6 ${currentPathname === '/contact' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
                <div className={`flex cursor-pointer justify-end`}>
                  <div onClick={toggleDrawer2}>
                    {/* <img src={`/image/about/desktop_hum.png`} alt='' className='' /> */}
                    <DotGrid />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex lg:hidden col-span-6 cursor-pointer justify-end`}>
            <div onClick={toggleDrawer}> <DotGrid /></div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 w-[500px] h-full rounded-tl-[50px] grid items-center justify-center rounded-bl-[50px] z-[30000] border border-r-0 border-black bg-[#d2ebf8] shadow-lg transform ${isDrawerOpen2 ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      >
        <button onClick={closeDrawer2} className="rotate-btn absolute top-4 right-4 text-lg bg-[#f8a065] border border-black rounded-full p-2"><RxCross2 /></button>

        <div className="flex flex-col p-4 gap-4">
          <div className='flex flex-col gap-16 justify-center items-center px-20'>
            <div className='text-center'>
              <img src='/image/logo.png' alt='' className='w-[200px] m-auto mb-4' />
              <p>Odio facilisis mauris sit amet mas sa vitae tortor condi me work with projects.</p>
            </div>
            <div className='text-center space-y-4'>
              <h5 className='text-2xl font-semibold'>Contact Us</h5>
              <p>350 Canal St, New York, USA</p>
              <p>randall@example.com</p>
              <p>+1123456788</p>
            </div>
            <div className='flex text-2xl gap-4'>
              <div className='social_icon'> <FaLinkedin /></div>
              <div className='social_icon'> <FaFacebook /></div>
              <div className='social_icon'> <FaTwitter /></div>
              <div className='social_icon'> <FaInstagram /></div>
            </div>

          </div>
        </div>
      </div>
      <div
        className={`fixed  right-0 w-full h-[380px] border-b border-black bg-white z-[30000] transform ${isDrawerOpen ? 'translate-y-0 top-0' : '-translate-y-full -top-4'} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='grid col-span-12 bg-[#fbfaf5] py-3 px-10'>
          <div className={`col-span-6`}>
            <Link to={`/`} className={``}>
              <img src="/image/logo.png" alt="Error" className='w-[120px]' />
            </Link>
          </div>
          <div className='col-span-6'>
            <button onClick={closeDrawer} className="rotate-btn absolute top-10 right-4 text-2xl text-[#f8a065]">
              <RxCross2 />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 px-10">
          {/* <Link to="/" onClick={closeDrawer} className="text-[15px] font-semibold">HOME</Link>
          <Link to="/about" onClick={closeDrawer} className="text-[15px] font-semibold">ABOUT</Link>
          <Link to="/portfolio" onClick={closeDrawer} className="text-[15px] font-semibold">PORTFOLIO</Link>
          <Link to="/faq" onClick={closeDrawer} className="text-[15px] font-semibold">FAQs</Link>
          <Link to="/blog" onClick={closeDrawer} className="text-[15px] font-semibold">BLOG</Link>
          <Link to="/contact" onClick={closeDrawer} className="text-[15px] font-semibold">CONTACT</Link> */}
          <p className='cursor-pointer nav_link1'><Link to="/" className='text-[15px] font-semibold' onClick={closeDrawer}>HOME</Link>
            <span className={`hover_img1 ${currentPathname === '/' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span>
          </p>
          <p className='cursor-pointer nav_link2'><Link to="/about" className='text-[15px] font-semibold' onClick={closeDrawer}>ABOUT</Link>
            <span className={`hover_img2 ${currentPathname === '/about' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
            <p className='cursor-pointer nav_link2'><Link to="/services" className='text-[15px] font-semibold' onClick={closeDrawer}>SERVICES</Link>
            <span className={`hover_img2 ${currentPathname === '/services' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
         
          <p className='cursor-pointer nav_link3'><Link to="/portfolio" className='text-[15px] font-semibold' onClick={closeDrawer}>PORTFOLIO</Link>
            <span className={`hover_img3 ${currentPathname === '/portfolio' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
          <p className='cursor-pointer nav_link4'><Link to="/faq" className='text-[15px] font-semibold' onClick={closeDrawer}>FAQs</Link>
            <span className={`hover_img4 ${currentPathname === '/faq' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
          <p className='cursor-pointer nav_link5'><Link to="/blog" className='text-[15px] font-semibold' onClick={closeDrawer}>BLOG</Link>
            <span className={`hover_img5 ${currentPathname === '/blog' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
          <p className='cursor-pointer nav_link6'><Link to="/contact" className='text-[15px] font-semibold' onClick={closeDrawer}>CONTACT</Link>
            <span className={`hover_img6 ${currentPathname === '/contact' ? '!block' : ''}`}><svg className="qodef-svg--menu-brush qodef-menu-item-brush qodef-menu-item-brush fill-[#f8a065]" width="74.204" height="41.153" viewBox="0 0 74.204 41.153"><path d="M6.763 35.078a6.232 6.232 0 0 1-5.026-2.792 9.966 9.966 0 0 1 .5-11.917C3.132 19.364 24.63-4.2 65.32.659c3.717.444 6.441 4.565 6.085 9.2s-3.658 8.034-7.374 7.6C29.2 13.3 11.46 32.715 11.284 32.912a6.049 6.049 0 0 1-4.521 2.166Z" transform="rotate(4.992 1.5265 35.01869904)"></path></svg></span></p>
        </div>
      </div>


      {isDrawerOpen && <div className="fixed inset-0 opacity-50 z-40" onClick={closeDrawer}></div>}
    </>
  );
}
