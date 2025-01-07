import React, { useContext } from 'react';
import './Skills.css';
import bgBlob from '../../assets/bgBlob.png';
import { UilHtml5 } from '@iconscout/react-unicons';
import { UilCss3Simple } from '@iconscout/react-unicons';
import { UilJavaScript } from '@iconscout/react-unicons';
import { UilReact } from '@iconscout/react-unicons';
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeScss } from "react-icons/bs";
import { DiW3C } from "react-icons/di";
import { FaBootstrap, FaGit } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import Language from './Language';
import { Context } from '../../context/Context';
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BsFiletypeJsx } from "react-icons/bs";
import { BsFiletypeJson } from "react-icons/bs";


const Skills = () => {
  const {lang} = useContext(Context);
  return (
    <div className=' bg-white relative font-outfit pb-5' id='skills'>
      <img src={bgBlob} alt="bgBlob" className='bgBlob' id='2' />
      <div className="min-h-screen flex items-center justify-center pt-40 pb-40 px-5">
        <div className='sm:min-w-[600px] px-4'>
          <h1 className='text-center text-3xl text-gray-900 font-extrabold'>Skills</h1>
          <h2 className='text-center text-2xl text-gray-700'>My Technical Level</h2>

          <h3 className='mt-5 mb-3 text-center text-xl text-coffee'>
            {lang === "eng" ? "Foundation" : "基礎"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3">

            <div className="flex items-start gap-1 justify-center sm:justify-start">
              <UilHtml5 />
              <div>
                <h3>HTML</h3>
                <p>
                  {lang === "eng" ? "Proficient" : "精通"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-1 justify-center">
              <UilCss3Simple />
              <div>
                <h3>CSS</h3>
                <p>
                  {lang === "eng" ? "Proficient" : "精通"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-1 justify-center sm:justify-end">
              <UilJavaScript />
              <div>
                <h3>Javascript</h3>
                <p>{lang === "eng" ? "Proficient" : "精通"}</p>
              </div>
            </div>

            <div className="flex items-start gap-1 justify-center sm:justify-start">
            <SiTypescript />
              <div>
                <h3>Typescript</h3>
                <p>{lang === "eng" ? "Familiar" : "熟悉"}</p>
              </div>
            </div>

            <div className="flex items-start gap-1 justify-center">
              <BsFiletypeJsx/>
              <div>
                <h3>JSX</h3>
                <p>{lang === "eng" ? "Familiar" : "熟悉"}</p>
              </div>
            </div>

            <div className="flex items-start gap-1 justify-center sm:justify-end">
              <BsFiletypeJson/>
              <div>
                <h3>Json</h3>
                <p>{lang === "eng" ? "Familiar" : "熟悉"}</p>
              </div>
            </div>
          </div>

          <hr className='bg-gray-400 sm:w-[300px] md:w-[500px] mx-auto mt-5' />

          <h3 className='mt-5 mb-3 text-center text-xl text-coffee'>
            {lang === "eng" ? "Framework" : "框架"}
          </h3>
          <div className="grid sm:grid-cols-3 md:grid-cols-5">

            <div className="flex items-start gap-1 justify-center sm:justify-start">
              <UilReact />
              <div>
                <h3>React JS</h3>
                <p>{lang === "eng" ? "Familiar" : "熟悉"}</p>
              </div>
            </div>

            <div className="flex items-start gap-1 justify-center">
              <RiTailwindCssFill size={25} />
              <div>
                <h3>Tailwind CSS</h3>
                <p>{lang === "eng" ? "Proficient" : "精通"}</p>
              </div>
            </div>

            <div className="flex items-start gap-1 justify-center sm:justify-end">
              <BsFiletypeScss size={22} />
              <div>
                <h3>SCSS</h3>
                <p>{lang === "eng" ? "have used" : "用過"}</p>
              </div>
            </div>

            <div className="flex items-start gap-1 justify-center sm:justify-end">
              <DiW3C size={32} />
              <div>
                <h3>W3 CSS</h3>
                <p>{lang === "eng" ? "have used" : "用過"}</p>
              </div>
            </div>

            <div className="flex items-start gap-1 justify-center sm:justify-end">
              <FaBootstrap />
              <div>
                <h3>Bootstrap</h3>
                <p>{lang === "eng" ? "Familiar" : "熟悉"}</p>
              </div>
            </div>

          </div>

          <hr className='bg-gray-400 sm:w-[300px] md:w-[500px] mx-auto mt-5' />

          <h3 className='mt-5 mb-3 text-center text-xl text-coffee'>
            {lang === "eng" ? "Api" : "Api 串接"}
          </h3>
          <div className="flex items-start gap-1 justify-center">
            <TbApi />
            <div>
              <h3>RESTFUL Api</h3>
              <p>{lang === "eng" ? "Familiar" : "熟悉"}</p>
            </div>
          </div>

          <hr className='bg-gray-400 sm:w-[300px] md:w-[500px] mx-auto mt-5' />

          <h3 className='mt-5 mb-3 text-center text-xl text-coffee'>
            {lang === "eng" ? "Design" : "設計"}
          </h3>
          <div className="grid sm:grid-cols-2">
            <div className="flex gap-1 justify-center">
              <FaFigma size={20}/>
              <div>
                <h3>Figma</h3>
                <p>{lang === "eng" ? "have learned" : "學過" }</p>
              </div>
            </div>
            <div className="flex gap-1 items-start justify-center">
              <SiCanva size={20} />
              <div>
                <h3>Canva</h3>
                <p>{lang === "eng" ? "Proficient" : "精通"}</p>
              </div>
            </div>
          </div>


          <hr className='bg-gray-400 sm:w-[300px] md:w-[500px] mx-auto mt-5' />

          <h3 className='mt-5 mb-3 text-center text-xl text-coffee'>
            {lang === "eng" ? "Version Control" : "版本控制"}
          </h3>
          <div className="flex items-start gap-1 justify-center">
            <FaGithub size={20} />
            <div>
              <h3>Git</h3>
              <p>{lang === "eng" ? "Familiar" : "熟悉"}</p>
            </div>
          </div>

          <hr className='bg-gray-400 sm:w-[300px] md:w-[500px] mx-auto mt-5' />

          <h3 className='mt-5 mb-3 text-center text-xl text-coffee'>
            {lang === "eng" ? "Development" : "開發"}
          </h3>
          <div className="flex items-start gap-1 justify-center">
            <IoLogoVercel size={20} />
            <div>
              <h3>Vercel</h3>
              <p>{lang === "eng" ? "Familiar" : "熟悉"}</p>
            </div>
          </div>

          <hr className='bg-gray-400 sm:w-[300px] md:w-[500px] mx-auto mt-5' />

          <h3 className='mt-5 mb-3 text-center text-xl text-coffee'>
            {lang === "eng" ? "Others" : "其他"}
          </h3>
          <div className="grid sm:grid-cols-3">
            <div className="flex items-start gap-1 justify-center">
              <FaWordpress size={20}/>
              <div>
                <h3>Wordpress</h3>
                <p>{lang === "eng" ? "have learned" : "學過" }</p>
              </div>
            </div>
            <div className="flex items-start gap-1 justify-center">
              <SiMysql size={25} color='black'/>
              <div>
                <h3>Mysql database</h3>
                <p>{lang === "eng" ? "have learned" : "學過" }</p>
              </div>
            </div>
            <div className="flex items-start gap-1 justify-center">
            <IoLogoFirebase />
              <div>
                <h3>Firebase</h3>
                <p>{lang === "eng" ? "have used" : "用過" }</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Language/>
    </div>
  )
}

export default Skills