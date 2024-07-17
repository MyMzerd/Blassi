
import Test from '../components/dashboardcomponents/Test';
import Dash from '../layouts/Dash';
import Calendar from '../components/dashboardcomponents/Calendar';
import { navigation } from '../constants/dash-constants';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Historique from '../components/dashboardcomponents/Historique';
import Profile from '../components/dashboardcomponents/Profile';
import Settings from '../components/dashboardcomponents/Settings';
import Offre from '../components/dashboardcomponents/Offre';

export default function Dashboard() {
  const { id } = useParams();
  return (
    <>
      <Dash>
      {id === "test" ? (
          <Test />
        ) :id === "dash-home" ? (
          <Calendar />
        ) :id === "historiques" ?(
          <Historique />
        ):id === "offre" ?(
          <Offre />
        ):id === "home" ?(
          <Test />
        ):id === "profile"?(
          <Profile />
        ) :id ==="settings" ?(
          <Settings />
        ) : null}
      </Dash>



    </>
    // <div className='flex flex-row'>
    //   <Sidebare />
    //   <Rightbar />
    // </div>
  )
}
