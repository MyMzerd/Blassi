import React from "react";
import { navigation } from "../../constants/dash-constants";
import img from "../../assets/blassiForTitle.png";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Sidebar() {
  const location = useLocation();
  const isCurrentLink = (current) => {
    return location.pathname === current;
  };
  return (
    <div>
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border rounded-3xl m-4 shadow-lg bg-grayChuia">
          <div className="flex h-16 flex-shrink-0 items-center border rounded-3xl shadow-lg bg-grayChuia px-4">
            <span className="text-white mt-3">BLASS</span>
            <img className="h-8 w-auto" src={img} alt="Your Company" />
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                // console.log(item.href),
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    classNames(
                      isCurrentLink(item.href)
                        ? "bg-yellow-500 text-white"
                        : "text-black hover:bg-yellow-500 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )
                    //   `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    //   location.pathname === item.href ? 'bg-yellow-500 text-white' : 'text-black hover:bg-yellow-500 hover:text-white'
                    // }`
                  }
                >
                  <item.icon
                    className={
                      classNames(
                        isCurrentLink(item.href)
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-white",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )
                      //   `mr-3 flex-shrink-0 h-6 w-6 ${
                      //   location.pathname === item.href ? 'text-gray-300' : 'text-gray-400 group-hover:text-white'
                      // }`
                    }
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'
// import { FiHome } from 'react-icons/fi';
// import { FiCalendar } from 'react-icons/fi';
// import { FaGithub } from 'react-icons/fa';
// import { MdSettings } from 'react-icons/md';

// import img from '../../assets/blassiForTitle.png'

// export default function Sidebare() {
//   return (
//     <div className='flex flex-row'>
//       <div className=' flex flex-col text-white max-w-[200px] min-h-[600px]  bg-slate-900'>

//         <div className='flex flex-row ml-6  text-xl  ' >
//         <h3 className='mt-7' >BLASS </h3>
//         <img className='w-6 h-6 mt-7' src={img} alt="" />
//         </div>
//         <div className='flex flex-col justify-center m-5 ml-6'>
//           <div className='flex flex-row m-3 w-36 h-7 rounded-md hover:bg-slate-800'>
//             <FaGithub size={20} />
//           <span className='ml-3'> Dashboard</span>
//           </div>
//           <div className='flex flex-row m-3 w-36 h-7 rounded-md hover:bg-slate-800'>
//             <FiHome size={20} />
//           <span className='ml-3'> page &</span>
//           </div>
//           <div className='flex flex-row m-3 w-36 h-7 rounded-md hover:bg-slate-800'>
//             <FiCalendar size={20} />
//           <span className='ml-3'> Reservation</span>
//           </div>
//           <div className='flex flex-row m-3 w-36 h-7 rounded-md hover:bg-slate-800'>
//             <FiCalendar size={20} />
//           <span className='ml-3'> Historique</span>
//           </div>

//         <span className='flex flex-row m-3 w-36 h-7 rounded-md hover:bg-slate-800 '>  <FiHome />page &</span>
//         <span className='flex flex-row m-3 w-36 h-7 rounded-md hover:bg-slate-800 '>  <FiCalendar />  Reservation</span>
//         <span className='flex flex-row m-3 w-36 h-7 rounded-md hover:bg-slate-800 '>  <FaGithub />Historique</span>

//         <div className='flex flex-row m-3 w-36 h-7 mt-28 rounded-md hover:bg-slate-800'>
//             <MdSettings size={20} />
//           <span className='ml-3'> Setting</span>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }
