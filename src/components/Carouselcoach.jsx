import {Carousel} from 'primereact/carousel'
import Coach from './Coach';

const Carouselcoach = () => {
    const value = [{
       image:'/images/coach3.jpeg',
       title:'Caoch Lamine' 
    },
    {
        image:'/images/coach.jpeg',
        title:'Caoch Ngom' 
     },
     {
        image:'/images/coach2.jpeg',
        title:'Caoch Lakhat' 
     },
     {
        image:'/images/coach4.jpeg',
        title:'Caoch Gervais' 
     }
];

const displayCoach = (option) => <Coach image={option.image} title={option.title} />

  return (
    <>
    <Carousel value={value} itemTemplate={displayCoach} numVisible={3} numScroll={3} header={<h5 className='font-bold text-3xl uppercase p-6 text-green-700'>Nos Coachs</h5>}/>
    </>
  )
}

export default Carouselcoach