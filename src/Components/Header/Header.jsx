import React, { useContext, useState } from 'react';
import './Header.css';
import { UilEstate } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilLaptopConnection } from '@iconscout/react-unicons';
import { UilBag } from '@iconscout/react-unicons';
import { UilEnvelope } from '@iconscout/react-unicons';
import { UilMultiply } from '@iconscout/react-unicons';
import { UilApps } from '@iconscout/react-unicons';
import profile1 from '../../assets/profile1.jpg';
import { Context } from '../../context/Context';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    // const [lang, setLang] = useState("eng");
    const {lang, setLang} = useContext(Context);
    return (
        <header className="w-[100%] fixed top-0 left-0 z-50 bg-white">
            <nav className="h-[4.5rem] flex justify-between items-center gap-[1rem] pl-[1.5rem] pr-[1.5rem] relative sm:shadow-md">
                <a href="index.html" className="flex items-center gap-1">
                    <img src={profile1} alt="profile" className='w-[30px] rounded-full ' />
                    <span className='hidden md:inline-block'>{lang === "eng" ? "Li Hsien Mei" : "李𥖄美"}</span>
                </a>

                <div className="nav_menu mr-4 flex items-center">

                    <select onChange={(e)=>setLang(e.target.value)} className='px-2 py-1 border-2 border-gray-500  rounded-md outline-0 mr-4'>
                        <option value="eng">Eng</option>
                        <option value="cn">中文</option>
                    </select>
                    

                    <ul className={`gap-[1rem] sm:gap-[2rem] text-gray-600 block absolute top-0 right-0 py-3 min-w-[200px] ${showNav ? "" : "hidden"} sm:static sm:flex bg-white shadow-md sm:shadow-none`}>
                        <li className="hover:text-black active:text-black transition-colors">
                            <a href="#home" className="flex items-center gap-1 py-2 px-3 sm:p-0">
                                <UilEstate color={"#374151"} className="hidden sm:inline-block" />
                                <span>{lang === "eng" ? "Home" : "首頁"}</span>
                            </a>
                        </li>

                        <li className="hover:text-black active:text-black transition-colors ">
                            <a href="#about" className="flex items-center gap-1 py-2 px-3 sm:p-0">
                                <UilUser color={"#374151"} className="hidden sm:inline-block" />
                                <span>{lang === "eng" ? "AboutMe" : "關於我"}</span>
                            </a>
                        </li>

                        <li className="hover:text-black active:text-black transition-colors ">
                            <a href="#skills" className="flex items-center gap-1 py-2 px-3 sm:p-0">
                                <UilLaptopConnection color={"#374151"} className="hidden sm:inline-block" />
                                <span>{lang === "eng" ? "Skills" : "技能"}</span>
                            </a>
                        </li>

                        <li className="hover:text-black active:text-black transition-colors ">
                            <a href="#projects" className="flex items-center gap-1 py-2 px-3 sm:p-0">
                                <UilBag color={"#374151"} className="hidden sm:inline-block" />
                                <span>{lang === "eng" ? "Projects" : "作品集"}</span>
                            </a>
                        </li>

                        <li className="hover:text-black active:text-black transition-colors ">
                            <a href="#contact" className="flex items-center gap-1 py-2 px-3 sm:p-0">
                                <UilEnvelope color={"#374151"} className="hidden sm:inline-block" />
                                <span>{lang === "eng" ? "Contact" : "聯絡"}</span>
                            </a>
                        </li>
                    </ul>

                    <div className={`absolute z-100 top-0 right-0 p-5 bg-gray-200 sm:hidden hover:bg-red-500 hover:text-white flex items-center justify-center w-3 h-3 ${showNav ? "" : "hidden"}`}>
                        <span className='' onClick={() => setShowNav(false)}><UilMultiply /></span>
                    </div>


                    <div className={`sm:hidden ${showNav ? "hidden" : ""}`}>
                        <span onClick={() => setShowNav(true)}><UilApps /></span>
                    </div>
                </div>


            </nav>
        </header>
    )
}

export default Header