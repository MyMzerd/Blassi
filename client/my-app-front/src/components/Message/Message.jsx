
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Message() {
  return (
    <div className="relative bg-gray-50">
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">

        <div className="bg-gray-50 relative content-center  py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 ">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-yellow-400 sm:text-3xl text-center">Contactez-nous</h2><br/>
            <p className="mt-3 text-lg leading-6 text-gray-500 text-center">
            Nous serions ravis de vous entendre!<br/>
            Contactez-nous!   
            </p>
          </div>
        </div>

        <div className="bg-gray-50 py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                  placeholder="Nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                  placeholder="Numéro de téléphone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-yellow-400 focus:ring-yellow-400"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"  className="inline-flex justify-center rounded-md border border-transparent bg-yellow-400 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}