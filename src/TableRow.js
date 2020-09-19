import React, { useEffect, useState } from "react";

function TableRow(props) {
    return (
        <tr>
          <th>
            <img src={props.flag} height="15" />
            &nbsp;&nbsp;{props.country}
          </th>
          <th>{props.cases}</th>
          <th>{props.todayCases}</th>
          <th>{props.deaths}</th>
          <th>{props.todayDeaths}</th>
          <th>{props.recovered}</th>
          <th>{props.active}</th>
          <th>{props.critical}</th>
          <th>{props.casesPerOneMillion}</th>
        </tr>
    );
}

export default TableRow;

