import vid from '../../assets/Hero.mp4'
import {Link} from 'react-router-dom'


/* This example requires Tailwind CSS v3.0+ */
export default function Hero() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-4 sm:px-6 sm:py-30 lg:px-8">
          
             <video className='relative z-0 w-full sm:rounded-3xl' autoPlay loop muted>
               <source src={vid} type='video/mp4' />
             </video>

            <div className=" absolute top-[11rem] left-[12rem] mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left z-10">
              <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-5xl">
                <span className='text-yellow-400'>Gagnez</span> votre temps.
                <br />
                Réservez votre <span className=''>place</span> de <span className='text-yellow-400'>parking</span> à l'avance.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Rejoignez notre communauté, et transformer vos problèmes de stationnement en des histoires du passé.              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link to='/recherche-lot'  className="rounded-md bg-yellow-400 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> Réservez</Link>
              </div>
            </div>
          
        </div>
      </div>
    )
  }  