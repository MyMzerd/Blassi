import React, { useState } from 'react';
import LoginNavbar from '../components/LoginNavbar.jsx';
import backgroundImage from '../assets/Garage.jpg';

export default function Login() {
  const [infos, setInfos] = useState({});

  function handleChange(e) {
    const { id, value } = e.target;
    setInfos({
      ...infos,
      [id]: value
    });
    console.log(infos);
  }

  const handleSumbit = (e) => {
    //sumbitting data logic
  }
  
  return (
    <div>
      <LoginNavbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="bg-white overflow-hidden rounded-lg shadow-lg flex flex-col lg:flex-row w-11/12 lg:w-3/4">
          {/* Partie gauche */}
          <div className='w-full lg:w-1/2 relative'>
            <div className='absolute inset-0 bg-cover bg-center' style={{
              backgroundImage: `url(${backgroundImage})`,
              filter: 'brightness(0.6)'
            }}></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white">
              <h2 className="text-3xl font-bold mb-4 text-center z-10">Bienvenue !</h2>
              <p className="text-lg text-center z-10">Rejoignez notre communauté dès aujourd'hui.</p>
            </div>
          </div>
          {/* Partie droite avec formulaire */}
          <div className="w-full lg:w-1/2 bg-white p-8 m-6">
            <h2 className="text-3xl text-center font-bold mb-6">Créer votre compte</h2>
            <form>
              <div className='mb-4 flex flex-col lg:flex-row justify-between'>
                <div className="mb-4 lg:mr-2 lg:mb-0">
                  <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">Nom</label>
                  <input onChange={handleChange} type="text" id="nom" name="nom" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4 lg:ml-2 lg:mb-0">
                  <label htmlFor="prénom" className="block text-gray-700 font-bold mb-2">Prénom</label>
                  <input onChange={handleChange} type="text" id="prénom" name="prénom" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Adresse email</label>
                <input onChange={handleChange} type="text" id="email" name="email" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Mot de passe</label>
                <input onChange={handleChange} type="password" id="password" name="password" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="passwordConf" className="block text-gray-700 font-bold mb-2">Confirmer le mot de passe</label>
                <input onChange={handleChange} type="password" id="passwordConf" name="passwordConf" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">S'inscrire</button>
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Continuer avec Google</button>
              </div>
              <p className="text-gray-700 text-sm">Vous avez déjà un compte ? <a href="/login" className="text-blue-500 hover:text-blue-700">Se connecter.</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
