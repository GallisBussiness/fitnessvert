import { MdFitnessCenter } from 'react-icons/md'
import { GoCalendar } from 'react-icons/go'

const Info = () => {
  return (
    <>
    {/* <!-- Jumbotron --> */}
<div className="p-6 shadow-lg rounded-lg w-3/4 mx-auto text-gray-700">
  <h2 className="font-bold uppercase text-4xl mb-5 text-center text-green-700">Vous êtes nouveau ici ?</h2>
  <div className="flex flex-col space-y-2">
    <h1 className="font-bold uppercase text-3xl">Comment faire pour adherer ? :</h1>
    <div className="uppercase font-semibold"> <MdFitnessCenter className="w-6 h-6 text-green-700 inline"/> Inscription : <span className="text-green-700">10 000 FCFA</span></div>
    <div className="uppercase font-semibold"><MdFitnessCenter className="w-6 h-6 text-green-700 inline"/> Mensualité : <span className="text-green-700"> 20 000 CFA</span></div>
    <div className="uppercase font-semibold"><MdFitnessCenter className="w-6 h-6 text-green-700 inline"/> Séances : <span className="text-green-700"> 1 500 CFA</span></div>
  </div>
   
  <hr className="my-6 border-gray-300" />
  <h1 className="font-bold uppercase text-4xl mb-5 text-center text-green-700">Heures d'ouvertures</h1>
  <div className="flex flex-col space-y-2">
    <div className="uppercase font-semibold"><GoCalendar className="w-6 h-6 text-green-700 inline"/> Du lundi au samedi <span className="text-green-700">De 07:00 à 00:00</span></div>
    <div className="uppercase font-semibold"><GoCalendar className="w-6 h-6 text-green-700 inline"/> Dimanche <span className="text-green-700">De 09:00 à 22:00</span></div>
  </div>
   
</div>
{/* <!-- Jumbotron --> */}
    </>
  )
}

export default Info