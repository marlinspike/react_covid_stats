import React, { useEffect, useState } from 'react';

function NavBody() {
    return(
        <div>

<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <a className="navbar-brand" href="#">CovidStats</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dashboards</a>
        <div className="dropdown-menu" aria-labelledby="dropdown01">
          <a className="dropdown-item" href="https://coronavirus.jhu.edu/map.html">Johns Hopkins World Dashboard</a>
          <a className="dropdown-item" href="https://covid19.who.int/?gclid=EAIaIQobChMIjv-1p_v36wIVjeSzCh0ejAsdEAAYASAAEgIFyvD_BwE">WHO Global Dashboard</a>
          <a className="dropdown-item" href="https://www.bing.com/covid/local/unitedstates">Microsoft Bing Dashboard</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

        </div>
        
    )
}

export default NavBody;