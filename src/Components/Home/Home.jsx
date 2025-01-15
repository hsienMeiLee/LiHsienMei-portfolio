import React, { useContext } from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';
import { UilMouseAlt } from '@iconscout/react-unicons';
import { UilAngleDown } from '@iconscout/react-unicons'
import { Context } from '../../context/Context';

export const Home = () => {
  const { lang } = useContext(Context);
  return (
    <section className="min-h-screen flex items-center justify-center py-36 md:py-0" id='home'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div className='md:col-start-2 md:row-start-1 flex justify-center items-center'>
            <div className="home_img"></div>
          </div>

          <div className='md:col-start-1 md:row-start-1 flex flex-col sm:flex-row items-center gap-10 px-4 mt-10 md:mt-0'>
            <Social />
            <div className='flex flex-col gap-5 items-center text-center md:text-start'>
              <Data />
              <a href="#about" className="flex items-center group relative hover:text-coffee">
                <UilMouseAlt size={40} />
                <span>{lang === "eng" ? "Scroll Down" : "向下捲動"}</span>
                <UilAngleDown className="group-hover:translate-y-2 transition-all" />
              </a>
            </div>
          </div>



        </div>


      </div>
    </section>
  )
}
