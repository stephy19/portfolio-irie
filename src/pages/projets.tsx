import {Avatar} from "@heroui/avatar";
import { motion } from "framer-motion";
import {Image} from "@heroui/image";


function Projets() {
  return (
    <div>
        
         <header className="bg-slate-100 max-sm:rounded-sm rounded-full shadow-lg p-5  m-10 flex md:flex-row max-sm:flex-col justify-between border-1 max-sm:size-auto">
                <h1 className="text-4xl border-1 border-sky-900 p-2 rounded-full  font-extrabold text-cyan-700 ml-6 pr-3 max-sm:text-2xl max-sm:pl-12">
                MON PORTFOLIO
                </h1>
                <div className="flex flex-row max-sm:flex-col max-sm:gap-5 max-sm:p-3 items-center justify-between gap-10">
                <a href="/" className="text-sky-700 hover:text-orange-500 hover:border-b-1 hover:border-orange-500 font-bold duration-300 pb-1  ">ACCUEIL</a>
                <a href="/projets" className="text-sky-700 hover:text-orange-500 hover:border-b-1 hover:border-orange-500 font-bold duration-300 pb-1">PROJETS REALISES </a>
                <a href="/about" className="text-sky-700 hover:text-orange-500 hover:border-b-1 hover:border-orange-500 font-bold duration-300 pb-1">A PROPROS DE MOI</a>
                </div>
                <div className="flex flex-row justify-center items-center gap-12">
               
                <motion.button whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                     className="p-3 px-10 max-sm:p-2 bg-green-500 rounded-full font-bold text-white hover:bg-teal-500 hover:shadow-teal-500 shadow-md cursor-pointer duration-300">
                 <a href="http://wa.me/+2250759444725">Whatsapp</a> 
                  </motion.button>
        
                  <motion.div animate={{rotate : -360 }} transition={{duration : 3 , repeat : Infinity}} className="flex flex-row items-center gap-2">
                  <Avatar className='cursor-pointer' isBordered color="primary" src="https://img.freepik.com/premium-vector/blue-pink-image-atom-with-word-atom-it_933463-18098.jpg?ga=GA1.1.151352256.1738668277&semt=ais_hybrid" />
                  </motion.div>
                
                </div>
                </header>
                <div className="flex flex-row max-sm:flex-col max-sm:p-3 max-sm:gap-6 justify-center items-center bg-slate-100 m-12 rounded-2xl  p-3 gap-2 border-1 shadow-lg"> 
                    <motion.div animate={{rotateX : -360 , scale : [1.2 , 1]}} transition={{duration : 1.3}} className="flex-col text-center ">
                  <Image className="border-1 border-sky-950" src="https://i.postimg.cc/QtMwbkF2/Capture-d-cran-2025-02-12-085401.png" width={600} height={300} alt="" />
                  <h2 className="text-2xl italic font-semibold text-red-800 hover:text-zinc-950"><a href="https://authenticdev.kesug.com/">AUTHENTIC DEV </a></h2>
                    </motion.div>
                    <motion.div animate={{rotateY : 360 , scale : [1.2 , 1]}} transition={{duration : 1.3}} className="flex-col text-center">
                    <Image className="border-1 border-sky-950" src="https://i.postimg.cc/1tYTYn6f/Capture-d-cran-2025-02-12-085427.png" width={600} height={300} alt="" />
                    <h2 className="text-2xl italic font-semibold text-red-800 hover:text-zinc-950"><a href="https://chrbouake.kesug.com/">CHR DE BOUAKE </a></h2>
                    </motion.div>
                </div>
    </div>
  )
}

export default Projets