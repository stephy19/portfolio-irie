"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiFramer, SiPhp, SiTailwindcss, SiMysql } from "react-icons/si";
import { FaJs } from "react-icons/fa";


export default function Home() {
  
  return (
    
    <div className='h-full bg-cover'>
      <div className="justify-center items-center">
        <header className="bg-slate-100 max-sm:rounded-sm rounded-full shadow-lg p-5 m-10 flex md:flex-row max-sm:flex-col justify-between border-1 max-sm:size-auto">
          <h1 className="text-4xl border-2 border-sky-900 p-2 rounded-full font-extrabold text-cyan-700 ml-6 pr-3 max-sm:text-2xl max-sm:pl-12">
            MON PORTFOLIO
          </h1>
          <div className="flex flex-row max-sm:flex-col max-sm:gap-5 max-sm:p-3 items-center justify-between gap-10">
              <a  href="/" className="text-sky-700 hover:text-orange-500 hover:border-b-2 hover:border-orange-500 font-bold duration-100 pb-1">ACCUEIL</a>
              <a href="/projets" className="text-sky-700 hover:text-orange-500 hover:border-b-2 hover:border-orange-500 font-bold duration-100 pb-1">PROJETS REALISES</a>
              <a href="/about" className="text-sky-700 hover:text-orange-500 hover:border-b-2 hover:border-orange-500 font-bold duration-100 pb-1">A PROPOS DE MOI</a>
            
             
            </div>
          <div className="flex flex-row justify-center items-center gap-12">
            <motion.button whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} className="p-3 px-10 max-sm:p-2 bg-green-500 rounded-full font-bold text-white hover:bg-teal-500 hover:shadow-teal-500 shadow-md cursor-pointer duration-300">
              <a href="http://wa.me/+2250759444725">Whatsapp</a>
            </motion.button>
          </div>
        </header>

        <div className="bg-slate-100 pl-3 flex flex-col justify-center items-center max-sm:mr-0 ml-8 mr-4 mb-5 border rounded-2xl shadow-lg">
          <div className="flex-col">
            <div className="flex flex-row max-sm:flex-col">
              <motion.div whileHover={{ rotate: 2.3, scale: 1.1 }} transition={{ duration: 0.7 }} className="p-2 pr-8 max-sm:w-5/6">
                <img className="m-4 border-2 border-sky-800 rounded-xl"
                  src="https://i.postimg.cc/gj6T4HKH/Whats-App-Image-2025-02-11-16-16-51-311169cd-removebg-Photoroom.jpg"
                  width={400}
                />
              </motion.div>

              <div className="flex flex-col p-8 text-center">
                <h1 className="font-bold text-4xl p-7 max-sm:text-md">
                  Salut Bienvenue !😉,
                  Je m'appelle IRIE VANGNY STEPHANE
                </h1>
                <p className="text-xl font-semibold">
                  je suis développeur fullstack  
                  web et mobile 
                </p>
                <p className="text-xl font-semibold">
                  residant à Abidjan, Côte d'Ivoire.
                </p>
                <div className="flex flex-col ">
                  <h1 className="text-3xl text-red-800 font-medium p-2">TECHNOLOGIES</h1>
                  <div className="flex flex-row max-sm:flex-col gap-8">
                    <motion.div animate={{ scale: [1.2, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-sky-500 flex flex-col items-center border-2 border-sky-500 rounded-xl p-2 shadow-lg shadow-sky-500">
                      <FaReact size={40} />
                    </motion.div>

                    <motion.div animate={{ scale: [1.2, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-green-500 flex flex-col items-center border-2 border-green-500 rounded-xl p-2 shadow-lg shadow-green-500">
                      <FaNodeJs size={40} />
                    </motion.div>

                    <motion.div animate={{ scale: [1.2, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-orange-500 flex flex-col items-center border-2 border-orange-500 rounded-xl p-2 shadow-lg shadow-orange-500">
                      <FaHtml5 size={40} />
                    </motion.div>

                    <motion.div animate={{ scale: [1.2, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-yellow-500 flex flex-col items-center border-2 border-yellow-500 rounded-xl p-2 shadow-lg shadow-yellow-500">
                      <FaJs size={40} />
                    </motion.div>

                    <motion.div animate={{ scale: [1.2, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-blue-500 flex flex-col items-center border-2 border-blue-500 rounded-xl p-2 shadow-lg shadow-blue-500">
                      <SiTailwindcss size={40} />
                    </motion.div>

                    <motion.div animate={{ scale: [1.2, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-purple-800 flex flex-col items-center border-2 border-purple-500 rounded-xl p-2 shadow-lg shadow-purple-500">
                      <SiFramer size={40} />
                    </motion.div>

                    <motion.div animate={{ scale: [1.2, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-violet-400 flex flex-col items-center border-2 border-violet-500 rounded-xl p-2 shadow-lg shadow-violet-500">
                      <SiPhp size={40} />
                    </motion.div>

                    <motion.div animate={{ scale: [1.2, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-red-500 flex flex-col items-center border-2 border-red-500 rounded-xl p-2 shadow-lg shadow-red-500">
                      <SiMysql size={40} />
                    </motion.div>
                  </div>    
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}
