import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CiMail } from "react-icons/ci";
import { Context } from "../../context/Context";
import { UilMessage } from "@iconscout/react-unicons";
import { FaLine, FaGithub } from "react-icons/fa";

const Contact = () => {
  const { lang } = useContext(Context);
  const form = useRef();

  // input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  // alert state
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jl6og5f", "template_xorts2h", form.current, {
        publicKey: "B73uqshoOiH5X0wK3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Reset fields
          setName("");
          setEmail("");
          setSubject("");

          // Show success alert for 3s
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center">
      <div>
        <h2 className="mt-20 text-center text-3xl text-gray-700 font-semibold">
          {lang === "eng" ? "Get in Touch" : "聯絡"}
        </h2>
        <p className="text-center text-xl text-gray-500 font-medium">
          {lang === "eng" ? "Contact us" : ""}
        </p>

        {/* Optional: success alert  */}
        {showAlert && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mt-4 text-center">
            {lang === "eng" ? "Message Sent Successfully!" : "訊息已成功發送！"}
          </div>
        )}

        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 md:flex-row md:gap-10">
            {/* Left side: contact info */}
            <div>
              <h3 className="text-gray-700 text-xl leading-relaxed font-semibold my-5">
                {lang === "eng" ? "Talk to me" : "聯絡方式"}
              </h3>
              <div className="flex flex-col gap-4 text-center">
                <a
                  href="mailto:hsumyatyadanaroo1@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="border rounded-lg border-gray-500 p-3"
                >
                  <div className="flex justify-center">
                    <CiMail size={30} />
                  </div>
                  <h3 className="contact_card-title">Gmail</h3>
                  <p>hsumyatyadanaroo1@gmail.com</p>
                </a>
                <a
                  href="https://line.me/ti/p/Nj-FlmBiTd"
                  target="_blank"
                  rel="noreferrer"
                  className="border rounded-lg border-gray-500 p-3"
                >
                  <div className="flex justify-center">
                    <FaLine size={30} />
                  </div>
                  <h3 className="contact_card-title">Line</h3>
                  <p>@nickey-eun</p>
                </a>
                <a
                  href="https://github.com/hsienMeiLee"
                  target="_blank"
                  rel="noreferrer"
                  className="border rounded-lg border-gray-500 p-3"
                >
                  <div className="flex justify-center">
                    <FaGithub size={30} />
                  </div>
                  <h3 className="contact_card-title">Github</h3>
                  <p>hsienMeiLee</p>
                </a>
              </div>
            </div>

            {/* Right side: form */}
            <div className="sm:min-w-[300px] md:min-w-[500px] lg:min-w-[700px]">
              <h3 className="my-5 text-gray-700 text-xl leading-relaxed font-semibold">
                {lang === "eng" ? "Submit a form" : "送出表單"}
              </h3>
              <form className="contact_form" ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col gap-1 my-2">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="p-2 shadow-md rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === "eng" ? "Insert your name" : "填入姓名/公司名稱"}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1 my-2">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="p-2 shadow-md rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === "eng" ? "Insert your email" : "填入email"}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1 my-2">
                  <label>Subject:</label>
                  <textarea
                    name="subject"
                    cols={30}
                    rows={10}
                    className="p-2 shadow-md rounded-lg resize-none"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={lang === "eng" ? "Ask me anything" : "填入問題"}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex mt-4 bg-gray-600 px-5 py-3 rounded-md text-white items-center gap-1 hover:scale-105 transition-all hover:bg-coffee"
                >
                  {lang === "eng" ? "Say Hello" : "打個招呼"}
                  <UilMessage />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
