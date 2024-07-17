import { Fragment, useEffect, useRef, useState  } from 'react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
  // SolidAlarm 
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { days, meetings } from '../../constants/dash-constants'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
const [currentDate, setCurrentDate] = useState(new Date());
const [timerDays ,setTimerDays] = useState('00');
const [timerHours ,setTimerHours] = useState('00');
const [timerMinutes ,setTimerMinutes] = useState('00');
const [timerSeconds ,setTimerSeconds] = useState('00');

let interval = useRef();

const startTimer = ()=>{
  const counterdownDate = new Date('May 30, 2024 00:00:00').getTime();

  interval = setInterval(()=>{
    const now = new Date().getTime();
    const distance = counterdownDate - now ;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24) /(1000 * 60 *60)));
    const minutes = Math.floor((distance % (1000 * 60 * 60)/(1000 * 60)));
    const seconds = Math.floor((distance % (1000 * 60 ))/1000);

    if(distance < 0){
      clearInterval(interval.current);
    }else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }

  },1000);

};
useEffect(()=>{
  startTimer();
  return ()=>{
    clearInterval(interval.current);

  };
});

 // Function to get the number of days in a month
 const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

// Function to generate days for the current month
const generateDays = () => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const totalDays = daysInMonth(month, year);

  const daysArray = [];
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push({
      date: new Date(year, month, i),
      dayOfMonth: i,
    });
  }
  return daysArray;
};

// Render the calendar dynamically
const renderCalendar = () => {
  const days = generateDays();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
    {days.map((day) => {
        const isCurrentMonth = day.date.getMonth() === currentMonth;
        const isToday = isCurrentMonth && day.date.getDate() === new Date().getDate();
        const dayClasses = `
          text-center
          ${isToday ? 'bg-yellow-500 text-white' : ''}  // Style today's date differently
          ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'} // Style current month days differently
        `;

        return (
          <div key={day.date.toISOString()} className={dayClasses}>
            <span className="block">{day.dayOfMonth}</span>
            {/* Additional logic for events or other styling */}
          </div>
        );
      })}
    </div>
  );
};

  return (
    
    <div>
      
      <h2 className="text-lg font-semibold text-gray-900">Current Resevation</h2>
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button
             onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
             type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex-auto font-semibold"> {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
            <button
               onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}

              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>

            {renderCalendar()}
          
          <button
            type="button"
            className="mt-8 w-full rounded-md border border-transparent bg-yellow-500 py-2 px-4 text-sm font-medium text-white shadow hover:bg-grayChuia focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            nouvelle réservation  
          </button>
        </div>
        
       
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {meetings.map((meeting) => (
            <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
              {/* <img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full" /> */}
              <div className="flex-auto">
                {/* <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3> */}
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                  <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Date</span>
                      <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <time dateTime={meeting.datetime}>
                      {meeting.date} at {meeting.time}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>{meeting.location}</dd>
                  </div>
                  <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <div className='bg-yellow-500  flex  justify-center items-center w-60 h-20 rounded-md'> 
                     
                      <section className='mr-3'>
                        <p className='text-lg'>{timerDays}</p>
                        <p ><small>Days</small></p>
                      </section>
                      <section className='mr-3'>
                        <p className='text-lg ml-2'>{timerHours}</p>
                        <p><small>Hours</small></p>
                      </section>
                      <section className='mr-3'>
                        <p className='text-lg ml-1'>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                      </section>
                      <section className='mr-3'>
                        <p className='text-lg ml-3'>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                      </section>
                      </div>
                      {/* <span className="sr-only">Location</span> */}
                      {/* <M className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                    </dt>
                    {/* <dd>{meeting.location}</dd> */}
                  </div>
                </dl>
              </div>
              <Menu as="div" className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center">
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Cancel
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
