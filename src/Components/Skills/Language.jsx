import React, { useRef, useEffect, useContext } from "react";
import ProgressBar from "./ProgressBar";
import "./Language.css";
import { Context } from "../../context/Context";

const Language = () => {
    const {lang} = useContext(Context);
    return (
        <div className="mx-5 pb-10">
            <h1 className="text-center font-semibold text-2xl text-gray-700">{lang === "eng" ? "Language skills" : "語言能力"}</h1>
            <h2 className="text-xl text-gray-500 text-center mt-5">{lang === "eng" ? "English" : "英文"}</h2>
            <section className="flex items-center justify-between max-w-[700px] mx-auto flex-wrap">
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Listening" : "聽力"} color="#ffdd8e" />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Speaking" : "口說"} color="#ffdd8e" />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Reading" : "閱讀"} color="#ffdd8e" />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Writing" : "寫作"} color="#ffdd8e" />
                </div>
            </section>

            <h2 className="text-xl text-gray-500 text-center mt-5">{lang === "eng" ? "Chinese" : "中文"}</h2>
            <section className="flex items-center justify-between max-w-[700px] mx-auto flex-wrap">
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Listening" : "聽力"} />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Speaking" : "口說"} />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={80} skill={lang === "eng" ? "Reading" : "閱讀"} />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={80} skill={lang === "eng" ? "Writing" : "寫作"} />
                </div>
            </section>

            <h2 className="text-xl text-gray-500 text-center mt-5">{lang === "eng" ? "Korean" : "韓文"}</h2>
            <section className="flex items-center justify-between max-w-[700px] mx-auto flex-wrap">
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={60} skill={lang === "eng" ? "Listening" : "聽力"} color="#8efffa" />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={60} skill={lang === "eng" ? "Speaking" : "口說"} color="#8efffa" />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={40} skill={lang === "eng" ? "Reading" : "閱讀"} color="#8efffa" />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={40} skill={lang === "eng" ? "Writing" : "寫作"} color="#8efffa"/>
                </div>
            </section>

            <h2 className="text-xl text-gray-500 text-center mt-5">{lang === "eng" ? "Burmese" : "緬甸文"}</h2>
            <section className="flex items-center justify-between max-w-[700px] mx-auto flex-wrap">
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Listening" : "聽力"} color="#8eabff" />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Speaking" : "口說"} color="#8eabff" />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Reading" : "閱讀"} color="#8eabff" />
                </div>
                <div className="w-1/2 md:w-1/4">
                <ProgressBar finalPercent={100} skill={lang === "eng" ? "Writing" : "寫作"} color="#8eabff" />
                </div>
            </section>
        </div>

    );
};

export default Language;
