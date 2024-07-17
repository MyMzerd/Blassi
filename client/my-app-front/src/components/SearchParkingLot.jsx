import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import BG_IMAGE from "/recherche_lot_page_bg.jpg";
import { Link, useNavigate } from "react-router-dom";

const SearchParkingLot = () => {
  // const [date, setDate] = useState(new Date());

  // Date and localisation States to Grab them from input fields
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [localisation, setLocalisation] = useState("");

  // handle search button function
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/resultats-lot", { state: { localisation, startDate, endDate } });
  };

  // localise the user after allowing access to localisation
  const handleLocalisation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Make a request to a Geocoding API (e.g. Google Maps Geocoding API)
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Parse the city name from the API response
          const city = data.results[3].formatted_address;
          console.log(data);
          setLocalisation(city);
        })
        .catch((error) => console.log(error));
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-4 items-center relative bg-[url('/recherche_lot_page_bg.jpg')] bg-cover h-[612px]">
        <div className="mt-12 rounded-full flex items-center justify-around p-8 w-[70%] h-[15%] bg-gray-800">
          <div className="flex items-center gap-2 mr-10">
            <FaLocationDot className="text-sferChuia" />
            <input
              type="text"
              placeholder="Tu Veux Parking où ?"
              className="text-white text-lg bg-transparent border-none focus:ring-transparent w-80 placeholder-white"
              value={localisation}
              onChange={(e) => setLocalisation(e.target.value)}
            />
            <button onClick={handleLocalisation}>
              <FaLocationCrosshairs className="text-green-500 hover:text-yellow-600" />
            </button>
          </div>

          <div className="flex items-center gap-2 mr-10">
            <MdDateRange className="text-sferChuia" />

            <DatePicker
              className="border-none bg-transparent focus:ring-transparent text-white text-lg rounded-lg w-full"
              placeholderText="date de début"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
              showTimeSelect
              maxDate={endDate}
              dateFormat={"MMMM d, yyyy h:mm aa"}
            />
          </div>

          <div className="flex items-center gap-2">
            <MdDateRange className="text-sferChuia" />

            <DatePicker
              className="border-none bg-transparent text-white text-lg focus:ring-transparent rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholderText="date de fin"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              endDate={endDate}
              startDate={startDate}
              minDate={startDate}
              showTimeSelect
              dateFormat={"MMMM d, yyyy h:mm aa"}
            />
          </div>

          <div className="bg-yellow-500 px-7 py-1 rounded-3xl transition-colors duration-700 ease-in-out hover:bg-yellow-300">
            <button className="" onClick={() => handleSearch()}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchParkingLot;
