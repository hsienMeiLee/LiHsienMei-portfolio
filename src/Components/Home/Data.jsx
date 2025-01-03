import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import { UilMessage } from '@iconscout/react-unicons';

const Data = () => {
  const {lang, setLang} = useContext(Context);
  return (
    <div className="home_data text-xl leading-relaxed ">
        <h1 className="home_title">{lang === "eng" 
        ?  <>Hello! I'm <span className='text-3xl font-bold text-gray-900'>Li Hsien Mei 👋🏻</span> </>
        : <>哈囉 我是<span className='text-3xl font-bold text-gray-900'>李𥖄美👋🏻</span></>}
        </h1>

        <h3 className="home_subtitle">
          {lang === "eng" 
          ? "I'm a passionate frontend web developer based in New Taipei." 
          : "我是一位充滿熱情的前端網頁開發人員，現居新北."}
        </h3>
        <a href="#contact" className="inline-flex mt-4 bg-gray-600 px-5 py-3 rounded-md text-white items-center gap-1 hover:scale-105 transition-all hover:bg-coffee">
          {lang === "eng" ? "Say Hello" : "打個招呼"} <UilMessage/>

        </a>
    </div>
  )
}

export default Data