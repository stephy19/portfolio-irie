import {Avatar} from "@heroui/avatar";
import { motion } from "framer-motion";
function About() {
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
               
                <div className="flex flex-col justify-center items-center border-1 bg-slate-100 m-12 rounded-2xl shadow-lg">
             <div className="flex flex-col justify-center items-center pb-6">
            <h2 className="text-3xl max-sm:text-sm p-4 font-bold"> Biographie</h2>
            <hr />
 <p className="px-56 max-sm:px-14 font-medium">IRIE VANGNY STEPHANE est un développeur passionné et innovant, originaire de Yopougon, Abidjan, Côte d’Ivoire. Avec une expertise solide en développement web et mobile, IRIE est reconnu pour ses compétences techniques et sa capacité à transformer des idées complexes en solutions fonctionnelles et intuitives.

Titulaire d'un diplôme en informatique, IRIE a acquis une expérience variée en travaillant sur divers projets, allant des applications mobiles aux plateformes web interactives. Il se distingue par son approche rigoureuse du développement, en mettant l'accent sur la qualité du code et l'expérience utilisateur.

En plus de ses compétences techniques, IRIE est un fervent défenseur de l'apprentissage continu et de la mise à jour de ses connaissances dans un domaine en constante évolution.

</p>  <br />    

<p className="px-56 max-sm:px-14 font-medium">Langages de programmation : JavaScript, Python

Frameworks : React, Django

Bases de données : MySQL, MongoDB

Développement mobile : FlutterFlow

Méthodologies : MERISE</p> <br />

<p className="px-56 max-sm:px-14 font-medium">
IRIE est également connu pour son esprit d'équipe et ses compétences en communication, ce qui fait de lui un collaborateur précieux dans tout environnement de travail. Son objectif est de continuer à innover et à créer des solutions technologiques qui ont un impact positif sur la société.

Centres d'intérêt :

Technologie et innovation

Formation et mentorat

Contribution aux projets open-source

Avec une vision claire de l'avenir et un engagement envers l'excellence, IRIE VANGNY STEPHANE est un développeur déterminé à laisser sa marque dans le monde de la technologie.
</p>

        </div>
     </div>
       
    </div>
  )
}

export default About