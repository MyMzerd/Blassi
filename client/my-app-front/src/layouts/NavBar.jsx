import { Fragment } from 'react'
import {Link} from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'

import BLASS from '../assets/Blass.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(props) {
  return (
    <Popover className="relative bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img  className="h-8 w-auto sm:h-10" src={BLASS} alt=""/>
            </a>
          </div>
             <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">Accueil</a>
             <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">A propos</a>
             <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Services</a>
             <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>
          

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link to='login' className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Se connecter</Link>
            <Link to='/recherche-lot' className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-yellow-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-500">Reservation</Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
      </Transition>
    </Popover>
  )
}