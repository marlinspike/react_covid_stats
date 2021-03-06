import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Stats_Header from "./Stats_Header";
import StatsTable from "./Stats_Table";
import moment from "moment";


function App(props) {
  const [global_confirmed, set_global_confirmed] = useState("Loading...");
  const [global_deaths, set_global_deaths] = useState("Loading...");
  const [global_recovered, set_global_recovered] = useState("Loading...");
  const [global_last_updated, set_global_last_updated] = useState("Loading...");
  

  useEffect(() => {
    getHeroStats().then((res) => {
      console.log(res);
      set_global_confirmed(res.confirmed);
      set_global_deaths(res.deaths);
      set_global_recovered(res.recovered);
      set_global_last_updated( moment(moment.utc().format('YYYY-MM-DD HH:mm:ss')).local().format('YYYY-MM-DD HH:mm') + " UTC");
    });
  }, []);

  return (
    <React.Fragment>
      <center>
        <h1>Coronavirus Stats</h1>
        <Stats_Header
          global_confirmed={Number(global_confirmed).toLocaleString()}
          global_deaths={Number(global_deaths).toLocaleString()}
          global_recovered={Number(global_recovered).toLocaleString()}
          global_last_updated={global_last_updated}
        />
      </center>
      <StatsTable />
    </React.Fragment>
  );
}

async function getDateTime() {
  return await (await fetch("http://worldtimeapi.org/api/timezone/EST")).json();
}


async function getHeroStats() {
  const API_Key = process.env.REACT_APP_CORONASTATS_KEY;
  return await (await fetch(
    `https://coronastats.azurewebsites.net/api/CoronaStats?code=${API_Key}`
  )).json();
}



export default App;
