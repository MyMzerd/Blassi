import { ChevronRightIcon } from '@heroicons/react/20/solid'
import parks from "../../assets/S-4.png"

export default function Service1() {
  return (
    <div className="bg-gray-50">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40 lg:px-8">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Réservez votre place à l'avance
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                 Pourquoi laisser le stationnement au hasard alors que vous pouvez réserver votre place à l'avance ?                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-yellow-400 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Réservez
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img className="h-full" src={parks} alt="" />
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-gray-50 sm:h-32" />
      </div>
    </div>
  )
}