import { useEffect } from 'react';
import {  Link,scrollSpy, } from 'react-scroll';

const Header = () => {

  useEffect(() => {
    scrollSpy.update();
  },[])

  return (
    <>
     <header>
  {/* <!-- Navbar --> */}
  <nav className="shadow-md py-2 bg-white relative flex items-center w-full justify-between">
    <div className="px-6 w-full flex flex-wrap items-center justify-between">
      <div className="flex items-center">
     
      </div>
      <div className="grow flex items-center">
        <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
          <li className="nav-item">
            <Link
             className="cursor-pointer nav-link block pr-2 lg:px-2 py-2 font-bold text-green-700 uppercase hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              spy={true} smooth={true} offset={50} duration={500}
              to="accueil">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link 
            className="cursor-pointer nav-link block pr-2 lg:px-2 py-2 font-bold text-green-700 uppercase hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              to="seance"
              spy={true} smooth={true} offset={50} duration={500}
               >Nos Séances</Link>
          </li>
          <li className="nav-item">
            <Link className="cursor-pointer nav-link block pr-2 lg:px-2 py-2 font-bold text-green-700 uppercase hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              to="calendar"
              spy={true} smooth={true} offset={50} duration={500}
              >Calendrier</Link>
          </li>
          <li className="nav-item">
            <Link className="cursor-pointer nav-link block pr-2 lg:px-2 py-2 font-bold text-green-700 uppercase hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              to="about"
              spy={true} smooth={true} offset={50} duration={500}
               >A Propos</Link>
          </li>
          <li className="nav-item mb-2 lg:mb-0">
            <Link className="cursor-pointer nav-link block pr-2 lg:px-2 py-2 font-bold text-green-700 uppercase hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              to="contact"
              spy={true} smooth={true} offset={50} duration={500}
              >Contact</Link>
          </li>
        </ul>
        <div className="flex items-center justify-center p-2 rounded-full shadow-md">
          <img src="/logo.jpeg"  alt="logo" className="w-10 h-10 "/>
        </div>
      </div>
    </div>
  </nav>
  {/* <!-- Navbar -->

  <!-- Background image --> */}
  <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
    backgroundPosition: '50%',
    backgroundImage: 'url("/images/1.jpg")',
    height: '450px'
  }}>
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      style={{ backgroundCcolor: 'rgba(0, 0, 0, 0.75)'}}>
      <div className="flex justify-center items-center h-full">
        <div className="text-center text-white px-6 md:px-12">
          <h1 className="text-5xl font-bold mt-0 mb-6 text-green-600">FITNESS VERT</h1>
          <h3 className="text-3xl font-bold mb-8">AMÉLIOREZ VOTRE CORPS</h3>
          <button type="button"
            className="inline-block px-6 py-2.5 border-2 border-green-700 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            COMMENCEZ
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Background image --> */}
    </header>
    </>
  )
}

export default Header