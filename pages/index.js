import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave1.png";
import node from "../public/node.png";
import ror from "../public/ror.png";
import python from "../public/python.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Deepak Kumar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Deepak Kumar -  Software Engineer</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1nWDn9AJQMFWoC5WySSuewE4qnPlxixby/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Deepak Kumar
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Backend Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Backend Developer with expertise in Ruby on rails and Node.js
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/avoidedeepak" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/deepak-kumar-86a831184/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Deepak18-06" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-50 h-50 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Hello! I'm a versatile engineer skilled in Ruby on Rails and Node.js, crafting efficient digital solutions.
              I'm passionate about exploring Artificial Intelligence and Machine Learning, using data-driven insights to create 
              smart applications. Additionally, I've delved into Rust for added performance and reliability. 
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={ror} />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={node} />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={python} />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the start of my journey as a software engineer, I've been immersed in the dynamic environment 
              of fast-paced startups. I began at CuraTech, a healthtech startup, and later transitioned to Browserstack 
              to pursue career growth and learning opportunities. At Browserstack, I gained valuable experience in teamwork, 
              fast-paced delivery, and effective collaboration with multiple teams within the organization.
              Subsequently, I joined PropertyPistol, where I contributed to various internal projects that had a 
              significant impact across the organization. This journey has not only honed my technical skills but also 
              instilled in me the importance of adaptability and effective coordination in rapidly evolving work environments.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
