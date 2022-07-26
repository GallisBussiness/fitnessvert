const Services = () => {
  return (
    <>
     <div className="space-y-2 md:space-y-0 w-4/5 mx-auto my-3 p-4 flex flex-col md:flex-row items-center space-x-1">
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/musculation.jpeg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2">Espace Musculation</h5>
    </div>
    <p  className="text-md font-semibold p-4">
    Abdominaux, pectoraux, biceps ou fessiers... Un suivi personnalisé vous sera proposé. que vous soyez débutant ou confirmé, notre salle est adaptée à chaque niveau.
    </p>
  </div>
            </div>
         </div>
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/fitness.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2">Les cours de Fitness</h5>
    </div>
    <p className="text-md font-semibold p-4">
    Notre objectif est de vous accompagner dans la bonne humeur. Du Cardio Step au Body Pump en passant par les Aérobic... Tentez l'expérience dans une atmosphère conviviale !
    </p>
  </div>
            </div>
         </div>
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/cardio.jpeg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2">Espace Cardio-Training</h5>
    </div>
    <p className="text-md font-semibold p-4">
    Optimisez votre endurance! Nos vélos, elliptiques, rameur et tapis de course sont à votre disposition. Choisissez le programme qui vous convient.
    </p>
  </div>
            </div>
         </div>
         <div className="w-full md:w-1/4">
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
             <a href="#!">
      <img className="rounded-t-lg h-72 w-full object-cover object-top" src="/images/ves.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-2xl font-medium mb-2">Les vestiaires</h5>
    </div>
    <p className="text-md font-semibold p-4">
    Des vestiaires aux casiers personnels et fermés à clés sont gratuitement mis à votre disposition. Pour le respect de votre intimité, les vestiaires hommes et femmes sont bien-sûr séparés
    </p>
  </div>
            </div>
    </div>
     </div>
    </>
  )
}

export default Services