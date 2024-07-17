import React, { Fragment, useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";
import { FaParking } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PencilIcon, PlusIcon } from "@heroicons/react/20/solid";
import car_parking from "/car_parking.jpg";
import { useLocation } from "react-router-dom";
import NavBar from "../layouts/NavBar";
import LoadingResultsLot from "./LoadingResultsLot";

const position1 = { lat: 34.04, lng: -6.84 };
const position2 = { lat: 34.04, lng: -6.6 };

const TestComponent = () => {
  const [open, setOpen] = useState(false);

  // For the Loading Page Before entering in result page//
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return <LoadingResultsLot></LoadingResultsLot>;
  }

  return (
    <div className="bg-gradient-to-tr from-amber-300 to-zinc-400">
      <div className="flex flex-col space-y-5">
        <h1 className="flex text-2xl justify-center"></h1>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          {/* The Map component */}
          <div
            className="flex w-[150vh] ml-10"
            style={{ height: "84vh", width: "150vh" }}
          >
            <Map
              zoom={9}
              center={position1}
              mapId={import.meta.env.VITE_MAP_API_ID}
            >
              {/* Custom Marker */}
              <AdvancedMarker
                onClick={() => setOpen(true)}
                position={position1}
              >
                <FaParking className="text-2xl bg-red-600" />
              </AdvancedMarker>

              <AdvancedMarker
                onClick={() => setOpen(true)}
                position={position2}
              >
                <FaParking className="text-2xl bg-red-600" />
              </AdvancedMarker>
            </Map>
          </div>
        </APIProvider>
      </div>

      {/* OUR PANEL */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-96">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>

                    <div className="h-full overflow-y-auto bg-white p-8">
                      <div className="space-y-6 pb-16">
                        <div>
                          <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                            <img
                              src={car_parking}
                              alt=""
                              className="object-cover"
                            />
                          </div>
                          <div className="mt-4 flex items-start justify-between">
                            <div>
                              <h2 className="text-lg font-medium text-gray-900">
                                <span className="sr-only">Details for </span>
                                [parking offer / parking_name]
                              </h2>
                              <p className="text-sm font-medium text-gray-500"></p>
                            </div>
                            <button
                              type="button"
                              className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              <HeartIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Favorite</span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Information
                          </h3>
                          <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                            <div className="flex justify-between py-3 text-sm font-medium">
                              <dt className="text-gray-500">Propriétaire</dt>
                              <dd className="text-gray-900">
                                [utilisateurs / nom_prenom]
                              </dd>
                            </div>
                            <div className="flex justify-between py-3 text-sm font-medium">
                              <dt className="text-gray-500">Ville</dt>
                              <dd className="text-gray-900">
                                [utilisateurs / ville]
                              </dd>
                            </div>
                            <div className="flex justify-between py-3 text-sm font-medium">
                              <dt className="text-gray-500">Addresse</dt>
                              <dd className="text-gray-900">
                                [utilisateurs / address]
                              </dd>
                            </div>
                            <div className="flex justify-between py-3 text-sm font-medium">
                              <dt className="text-gray-500">Pays</dt>
                              <dd className="text-gray-900">
                                [utilisateurs / Pays]
                              </dd>
                            </div>
                            <div className="flex justify-between py-3 text-sm font-medium">
                              <dt className="text-gray-500">Créer à: </dt>
                              <dd className="text-gray-900">
                                [parking offer/date_created]
                              </dd>
                            </div>
                            <div className="flex justify-between py-3 text-sm font-medium">
                              <dt className="text-gray-500">
                                Dérnier reservation:
                              </dt>
                              <dd className="text-gray-900">
                                [reservations / reservation date lkbira for this
                                id fl offers ]
                              </dd>
                            </div>
                            <div className="flex justify-between py-3 text-sm font-medium">
                              <dt className="text-gray-500">Prix</dt>
                              <dd className="text-gray-900">
                                [offre_parking / prix ]
                              </dd>
                            </div>
                            <div className="flex justify-between py-3 text-sm font-medium">
                              <dt className="text-gray-500">Disponibilité</dt>
                              <dd className="text-gray-900">
                                [offre_parking / status_offre]
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Description
                          </h3>
                          <div className="mt-2 flex items-center justify-between">
                            <p className="text-sm italic text-gray-500">
                              Add a description to this image.
                            </p>
                            <button
                              type="button"
                              className="-mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              <PencilIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Add description</span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Avis:</h3>
                          <ul
                            role="list"
                            className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200"
                          >
                            <li className="flex items-center justify-between py-3">
                              <div className="flex items-center">
                                <img
                                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                                  alt=""
                                  className="h-8 w-8 rounded-full"
                                />
                                <p className="ml-4 text-sm font-medium text-gray-900">
                                  Aimee Douglas
                                </p>
                              </div>
                              <button
                                type="button"
                                className="ml-6 rounded-md bg-white text-sm font-medium text-sferChuia hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Remove
                                <span className="sr-only"> Aimee Douglas</span>
                              </button>
                            </li>
                            <li className="flex items-center justify-between py-3">
                              <div className="flex items-center">
                                <img
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                  className="h-8 w-8 rounded-full"
                                />
                                <p className="ml-4 text-sm font-medium text-gray-900">
                                  Andrea McMillan
                                </p>
                              </div>
                              <button
                                type="button"
                                className="ml-6 rounded-md bg-white text-sm font-medium text-sferChuia hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Remove
                                <span className="sr-only">
                                  {" "}
                                  Andrea McMillan
                                </span>
                              </button>
                            </li>
                            <li className="flex items-center justify-between py-2">
                              <button
                                type="button"
                                className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="ml-4 text-sm font-medium text-black group-hover:text-indigo-500">
                                  Share
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="flex-1 rounded-md border border-transparent bg-sferChuia py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Reserver
                          </button>
                          <button
                            type="button"
                            className="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Localiser en google maps
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default TestComponent;
