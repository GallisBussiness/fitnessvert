
const About = () => {
  return (
    <>
    <div className="flex p-2 my-3" id="about">
  <div className="flex flex-col md:flex-row bg-white">
    <img className="w-full md:w-1/2 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="/images/salle.jpeg" alt="salle" />
    <div className="p-6 flex flex-col space-y-6 items-center w-full md:w-1/2">
      <h5 className="text-gray-900 text-3xl font-bold mb-2 uppercase">Bienvenue à FITNESS VERT</h5>
      <p className="text-gray-700 text-lg mb-4 font-semibold">
      L'équipe FITNESS VERT vous accueille 7j/7 de 6h30 à 1h du matin dans la bonne humeur et la convivialité. FITNESS VERT est une salle de sport spacieuse de 600m2 installée à Keur Massar sur la route de Rufisque et très accessible à côté de la sortie n°9 de l'autoroute à péage Dakar, composée d'une salle de fitness, d'une salle de musculation, d'une salle RPM, d'un espace cardio-training et un espace détente.
      </p>
    </div>
  </div>
</div>
    </>
  )
}

export default About