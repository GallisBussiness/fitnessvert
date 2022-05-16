import './App.css';
import About from './components/About';
import Calendar from './components/Calendar';
import Carouselcoach from './components/Carouselcoach';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import Seances from './components/Seances';
import Services from './components/Services';
 

function App() {
  return (
    <>
    <Header />
    <Info />
    <About />
    <Services />
    <Seances />
    <Calendar />
    <Carouselcoach />
    <Footer />
    </>
  );
}

export default App;
