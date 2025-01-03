import React, { useContext } from 'react';
import profile from '../../assets/profile1Square.jpg';
import uitLogo from '../../assets/uitLogo.png';
import { UilUniversity } from '@iconscout/react-unicons';
import { Context } from '../../context/Context';

const About = () => {
    const {lang} = useContext(Context);
    return (
        <div className='min-h-screen flex items-center justify-center font-outfit pb-10 sm:pb-0 z-50' id='about'>
            <div className='flex flex-col items-center '>
                <img src={profile} alt="profile_picture" className='w-60 rounded-3xl shadow-2xl' />
                <div className="bg-white border border-gray-200 rounded-3xl px-10 py-7 mt-4 max-w-[600px] mx-3 hover:bg-black/70 transition-all relative group">
                    <div className="sm:flex items-center gap-5 justify-between ">
                        <div className='group-hover:text-white/70'>
                            <UilUniversity/>
                        </div>
                        <div className='group-hover:text-white/70'>
                            
                            <a href="https://www.uit.edu.mm/" target='_blank'>
                                <p className='font-semibold text-2xl text-gray-700 mt-6 sm:mt-0 group-hover:text-white/80'>
                                    {lang === "eng" ? "University of Information Technology" : "資訊科技大學"}
                                </p>
                            </a>
                            <div className="flex items-center justify-between text-lg text-gray-500 group-hover:text-white/70">
                                <span>
                                    {lang === "eng" ? "Myanmar" : "緬甸"}
                                </span>
                                <span>2018 - 2020</span>
                            </div>
                        </div>
                        <a href="https://www.uit.edu.mm/" target='_blank' className='p-1 rounded-full group-hover:bg-white/80 transition-all'><img src={uitLogo} alt="uitLogo" className='w-16 hover:scale-110 transition-all cursor-pointer hidden sm:block' /></a>
                    </div>

                    <p className='mt-8 group-hover:text-white/70 text-lg leading-relaxed'>
                        {lang === "eng" 
                        ? "Hello, my name is Li Hsien Mei, a Burmese-Taiwanese, currently residing in Taiwan. I began learning front-end development in 2018 and have dedicated myself to mastering HTML, CSS, JavaScript, and frameworks like React and tailwind. I have built multiple personal projects that have given me a solid foundation in web development and a deep passion for creating intuitive and efficient user interfaces. I am specialising React right now but I am more than happy to learn other languages. I love learning cutting-edge technologies and be a part of it." 
                        : "哈囉 我是李𥖄美，台灣-緬甸雙重國籍，目前居在新北。我從2018 年 上大學的時候 開始學程式。 有寫過多個 個人專案。對 前端開發有充滿的熱情，目前在使用 React JS 與 tailwind CSS 寫專案 但 願意 使用 以及 學習其他語言。喜歡學習 尖端技術，並 喜歡成為新技術的一部分。"}
                    </p>
                </div>

                
            </div>
        </div>
    )
}

export default About