import React, { useEffect, useState } from 'react';

//Header of the Coronavirus Stats page
function Stats_Header(props) {
    return (
        <React.Fragment>
        <h1>Coronavirus Stats</h1>
        <p className="lead">
          <b>Confirmed:</b> {props.global_confirmed} <br />
          <b>Deaths:</b> {props.global_deaths} <br />
          <b>Recovered:</b> {props.global_recovered} <br />
          <b>Updated:</b> {props.global_last_updated}
        </p>
      </React.Fragment>
    );
    
}

export default Stats_Header;