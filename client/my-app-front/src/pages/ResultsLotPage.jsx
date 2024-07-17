import React from "react";
import ResultParkingSearch from "../components/ResultParkingSearch";
import { useLocation } from "react-router-dom";
import NavBar from "../layouts/NavBar";

const ResultsLotPage = () => {
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <NavBar />
      <ResultParkingSearch />
    </>
  );
};

export default ResultsLotPage;
