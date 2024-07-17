
export default function InfosPerso() {
  return (
    <div>
      <div className='bg-gray-200 flex justify-center h-screen items-center'>
        <div className='bg-white overflow-hidden rounded-lg border border-green-500 shadow-lg w-3/4 h-3/4'>
            <div className='flex flex-col p-8 mr-4 mt-6 justify-center'>
              <h2 className='text-3xl font-bold text-center'>Devenir bailleur</h2>
              <h3 className="mt-4 text-center font-semi-bold text-gray-700">Informations personnelles</h3>
            </div>
            <form className='flex flex-col justify-start ml-8 mr-8 border border-red-600'>
            <div className="mb-4 border border-red-600 w-full">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Adresse email</label>
              <input type="text" id="username" name="username" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-4 border border-red-600 w-full">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Adresse email</label>
              <input type="text" id="username" name="username" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            </form>
          </div>
        </div>
    </div>
  )
}
