import React, { useContext } from 'react';
import adidas from '../../assets/adidas.png';
import crypto from '../../assets/crypto.png';
import landing from '../../assets/landing.png';
import netflix from '../../assets/netflix.png';
import searchFilter from '../../assets/search-filter.png';
import youtube from '../../assets/youtube.png';
import { Context } from '../../context/Context';

const Projects = () => {
  const { lang } = useContext(Context);
  const ProjectItem = [
    {
      nameEn: "Adidas eCommerce",
      nameTw: "Adidas 電商",
      descriptionEn: "This is the sample of Adidas website and practice for eCommerce website.",
      descriptionTw: "這是Adidas網站範例和電子商務網站實踐。",
      tech: ["React", "Tailwind", "HTML", "CSS"],
      github: "https://github.com/hsienMeiLee/adidas-eCommerce",
      vercel: "https://adidas-e-commerce.vercel.app/",
      img: adidas
    }, {
      nameEn: "Youtube clone",
      nameTw: "Youtube 克隆",
      descriptionEn: "This is the clone of youtube using youtube data api. Pure CSS is used to style",
      descriptionTw: "這是使用 youtube data 串接 的 youtube 克隆。純CSS用於樣式",
      tech: ["React", "CSS", "HTML", "Youtube Data Api"],
      github: "https://github.com/hsienMeiLee/youtubeCloneReactProject",
      vercel: "https://youtube-clone-react-project-zeta.vercel.app/",
      img: youtube
    }, {
      nameEn: "Cryptocurrency website",
      nameTw: "加密貨幣網站",
      descriptionEn: "This is the website where users can find crypto coins and can search desired coins using CoinGecko Api. Currency can be changed to TWD, USD and JPY",
      descriptionTw: "這是user可以找到 加密貨幣並可以使用 CoinGecko 串接 搜尋所需貨幣的網站。貨幣可更改為新台幣、美金和日幣",
      tech: ["React", "HTML", "CSS", "CoinGecko Api"],
      github: "https://github.com/hsienMeiLee/cryptoCurrencyWebsite",
      vercel: "https://crypto-currency-website-inky.vercel.app/",
      img: crypto
    }, {
      nameEn: "Netflix Clone",
      nameTw: "Netflix 克隆",
      descriptionEn: "This is the website for Netflix clone using tmdb movie database api.",
      descriptionTw: "這是使用 tmdb 電影資料庫 API 克隆 Netflix 的網站.",
      tech: ["React", "HTML", "CSS", "Tmdb Movie Database Api"],
      github: "https://github.com/hsienMeiLee/netflixClone",
      vercel: "https://netflix-clone-for-educational-purpose.vercel.app/",
      img: netflix
    }, {
      nameEn: "Ecommerce - search and filter",
      nameTw: "電商 - 搜尋和過濾",
      descriptionEn: "This is the eCommerce website specializing search and filter",
      descriptionTw: "這是專門搜尋和過濾的電子商務網站.",
      tech: ["React", "HTML", "CSS"],
      github: "https://github.com/hsienMeiLee/SearchAndFilter-testing",
      vercel: "https://search-and-filter-testing.vercel.app/",
      img: searchFilter
    }, {
      nameEn: "SCSS landing page tutorial",
      nameTw: "SCSS 教學",
      descriptionEn: "This is the youtube tutorial for landing page using SCSS.",
      descriptionTw: "這是使用 SCSS 的 YouTube 教學。",
      tech: ["HTML", "CSS", "SCSS"],
      github: "https://github.com/hsienMeiLee/Landing-page-with-SCSS",
      vercel: "https://landing-page-with-scss-red.vercel.app/",
      img: landing
    }
  ]
  return (
    <div className='flex items-center justify-center min-h-screen mx-5 md:mx-10 lg:mx-28 my-10' id='projects'>
      <div>
        <h1 className='mt-5 font-extrabold text-xl sm:text-3xl text-gray-700 sm:leading-loose text-center'>{lang === "eng" ? "My recent Projects" : "我最近的項目"}</h1>
        <p className='mb-5 text-base sm:text-xl text-gray-500 sm:leading-relaxed text-center'>{lang === "eng" ? "These are my recent projects. Please click the image to go to live demo and click the brown button to view the source code." : "這些是最近項目。請點擊圖片進入現場演示，點擊棕色按鈕查看程式碼。"}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          {ProjectItem.map((item, index) => (
            <div className="bg-white rounded-lg shadow-lg py-2 m-2 xl:m-3 hover:scale-105 hover:shadow-xl transition" key={index}>
              <div className="p-5">
                <h2 className='text-gray-700 text-xl font-semibold leading-relaxed'>
                  {lang === "eng" ? item.nameEn : item.nameTw}
                </h2>
                <p className='text-gray-500 text-base leading-relaxed'>
                  {lang === "eng" ? item.descriptionEn : item.descriptionTw}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.tech.map((tech, i) => (
                    <button className='text-xs bg-gray-300 text-gray-600 px-2 py-0.5 rounded-full' key={i}>{tech}</button>
                  ))}
                </div>
                <div className="flex justify-end mt-3">
                  <a href={item.github} target='_blank' className='bg-coffee text-white px-3 py-1.5 rounded-md font-light'>Go to Github</a>
                </div>
              </div>
              <a href={item.vercel} target='_blank'>
                <img src={item.img} alt="" />
              </a>
            </div>
          ))}




        </div>
      </div>
    </div>
  )
}

export default Projects