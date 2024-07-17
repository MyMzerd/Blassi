import React, { useState } from 'react';
import LoginNavbar from '../components/LoginNavbar.jsx';
import backgroundImage from '../assets/Garage.jpg';

export default function Login() {
  const [loginInfos, setLoginInfos] = useState({});

  //handling input changes
  function handleChange(e) {
    const { id, value } = e.target;
    setLoginInfos({
      ...loginInfos,
      [id]: value
    });
    console.log(loginInfos);
  }

  //handling sumbit
  const handleSumbit = (e) => {
    //sumbitting data logic
  }

  return (
    <div>
      <LoginNavbar />
      <div className="flex justify-center min-h-screen bg-gray-200">
        <div className="bg-white overflow-hidden rounded-lg shadow-lg flex flex-col lg:flex-row w-11/12 lg:w-3/4 h-auto lg:h-2/3 mt-12">
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
            <h2 className="text-3xl text-center font-bold mb-4">Se connecter</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Adresse email</label>
                <input onChange={handleChange} type="text" id="email" name="email" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Mot de passe</label>
                <input onChange={handleChange} type="password" id="password" name="password" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Se connecter</button>
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Continuer avec Google</button>
              </div>
              <p className="text-gray-700 text-sm">Pas encore inscrit ? <a href="/inscription" className="text-blue-500 hover:text-blue-700">Inscrivez-vous ici.</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
