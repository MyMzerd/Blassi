import React from 'react'

export default function InfosGarage() {
    return (
      <div>
        <div className='bg-gray-200 flex flex-col justify-center h-screen items-center'>
          <h1 className='m-4 text-3xl font-bold'>Devenir bailleur</h1>
          <div className='bg-white overflow-hidden rounded-lg border border-green-500 shadow-lg w-3/4'>
              <div className='flex flex-col p-8 mr-4 mt-6 justify-center'>
                <h2 className='text-2xl font-semi-bold text-center'>Informations du bailleur</h2>
              </div>
              {/**FORM */}
              <form className='flex flex-col justify-start ml-16 mr-16 border border-blue-600'>
              <div className="mb-4 border border-red-600 w-full">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Nom complet</label>
                <input type="text" id="username" name="username" placeholder='Ahmed Hamid' className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4 border border-red-600 w-full">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="text" id="username" name="username" placeholder='exemple@exemple.com' className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4 border border-red-600 w-full">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Numéro de téléphone</label>
                <input type="text" placeholder='06 XX XX XX XX' id="username" name="username" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4 border border-red-600 w-full">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Ville</label>
                <input type="text" placeholder='06 XX XX XX XX' id="username" name="username" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4 border border-red-600 w-full">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Numéro de téléphone</label>
                <input type="text" placeholder='06 XX XX XX XX' id="username" name="username" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              </form>
              <div className='mr-8 ml-8 mb-8 flex justify-end border border-red-300'>
                <button type="submit" className="w-1/8 bg-yellow-400 hover:bg-yellow-300 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Soumettre</button>
              </div>
              
            </div>
          </div>
      </div>
    )
  }
  
