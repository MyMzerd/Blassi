import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GiPositionMarker } from "react-icons/gi";
import { Link } from "react-router-dom";
import SearchParkingLot from "../components/SearchParkingLot";
import Navbar from "../layouts/NavBar";

const SearchLotPage = () => {
  return (
    <>
      <Navbar />
      <SearchParkingLot />
    </>
  );
};

export default SearchLotPage;
