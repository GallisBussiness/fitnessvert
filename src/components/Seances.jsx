import { motion } from 'framer-motion';
const Seances = () => {

  const skillvariant = {
    init: {
      opacity: 0
    },
    anime: {
      opacity: 1,
      transition :{
        type:'spring',
        when:'beforeChildren',
        staggerChildren: 0.5
      }
    }
  }
  const skillchildvariant = {
    init: {
      y: - 50,
      opacity: 0
    },
    anime: {
      y:0,
      opacity: 1,
    }
  }

  return (
    <>
    <motion.div id="seance" variants={skillvariant} initial="init" animate="anime">
       <motion.div variants={skillchildvariant}>
        <div className="w-4/5 mx-auto my-3 p-4 flex flex-col md:flex-row items-center space-x-1 space-y-2 md:space-y-0">
        <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/yoga.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">YOGA 1.500 FCFA/SEANCE</h5>
    </div>
  </div>
            </div>
         </div>
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/aerobic.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">AEROBIE 1.500 FCFA/SEANCE</h5>
    </div>
  </div>
            </div>
         </div>
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/cardio.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">CARDIO 1.500 FCFA/SEANCE</h5>
    </div>
  </div>
            </div>
         </div>
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/gymbaton.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">GYM Bâtons 1.500 FCFA/SEANCE</h5>
    </div>
  </div>
            </div>
    </div>
        </div>
    </motion.div>

    <motion.div variants={skillchildvariant} >
        <div className="w-4/5 mx-auto my-3 p-4 flex flex-col md:flex-row items-center space-x-1 space-y-2 md:space-y-0">
        <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/bpomp.jpeg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">Body Pump 1.500 FCFA/SEANCE</h5>
    </div>
  </div>
            </div>
         </div>
         <div className="w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-72 object-cover object-top" src="/images/musculation.jpeg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">Musculation 1.500 FCFA/SEANCE</h5>
    </div>
  </div>
            </div>
         </div>
         <div className="w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-72 object-cover object-top" src="/images/bcombat.jpeg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">Body Combat 1.500 FCFA/SEANCE</h5>
    </div>
  </div>
            </div>
         </div>
         <div className="w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-72 object-cover object-top" src="/images/battak.jpeg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">Body Attak 1.500 FCFA/SEANCE</h5>
    </div>
  </div>
            </div>
    </div>
        </div>
    </motion.div>

    <motion.div variants={skillchildvariant}>
        <div className="w-4/5 mx-auto my-3 p-4 flex flex-col md:flex-row items-center space-x-1 space-y-2 md:space-y-0">
        <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-wfull object-cover object-top" src="/images/karate.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">Karaté</h5>
    </div>
  </div>
            </div>
         </div>
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/judo.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">judo</h5>
    </div>
  </div>
            </div>
         </div>
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/taewondo.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">Taewondo</h5>
    </div>
  </div>
            </div>
         </div>
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/aikido.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2 uppercase">aÏkido</h5>
    </div>
  </div>
            </div>
    </div>
        </div>
    </motion.div>
    </motion.div>
   
    </>
  )
}

export default Seances