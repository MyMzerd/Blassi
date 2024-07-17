
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { navigation, userNavigation } from '../constants/dash-constants'
import Sidebar from '../components/dashboardcomponents/Sidebar'
import SidebareMobile from '../components/dashboardcomponents/SidebareMobile'
import Rightbar from '../components/dashboardcomponents/Rightbar'
import Calendar from '../components/dashboardcomponents/Calendar'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dash({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <SidebareMobile   setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen} />
      <div>
        

        {/* Static sidebar for desktop */}
        <Sidebar />
     
        <div className="flex flex-col md:pl-64">
         
        <Rightbar  setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}/>
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900"></h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              
                <div className="py-4">
                
                <div className="h-96 rounded-lg  border-gray-200" >
                
                {children}
                </div>
                  
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
