import React, { useEffect, useState } from "react";
import TableRow from './TableRow'

function StatsTable(props) {
    const [data, set_data] = useState([]);
    let table_data = "";

    useEffect(() => {
      getStatsTable().then((res) => {
        console.log(res);
        set_data(res);
      });
    }, []);

    for (var i = 0; i < data.length; i++){
        table_data += data[i].id
    }

    
    
    return (
      <React.Fragment>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Cases Today</th>
              <th>Deaths</th>
              <th>Deaths Today</th>
              <th>Recovered</th>
              <th>Active</th>
              <th>Critical</th>
              <th>Cases Per Million</th>
            </tr>
          </tbody>

          {data.map((item, i) => {
              return (
                <React.Fragment>
                  <TableRow
                    country={item.country}
                    flag={item.countryInfo.flag}
                    cases={Number(item.cases).toLocaleString()}
                    todayCases={Number(item.todayCases).toLocaleString()}
                    todayDeaths={Number(item.todayDeaths).toLocaleString()}
                    recovered={Number(item.recovered).toLocaleString()}
                    active={Number(item.active).toLocaleString()}
                    critical={Number(item.critical).toLocaleString()}
                    casesPerOneMillion={Number(
                      item.casesPerOneMillion
                    ).toLocaleString()}
                  />
                </React.Fragment>
              );
          })}
        </table>
      </React.Fragment>
    );
}
/*
                  <tr>
                    <th>
                      <img src={item.countryInfo.flag} height="15" />
                      &nbsp;&nbsp;{item.country}
                    </th>
                    <th>{Number(item.cases).toLocaleString()}</th>
                    <th>{Number(item.todayCases).toLocaleString()}</th>
                    <th>{Number(item.deaths).toLocaleString()}</th>
                    <th>{Number(item.todayDeaths).toLocaleString()}</th>
                    <th>{Number(item.recovered).toLocaleString()}</th>
                    <th>{Number(item.active).toLocaleString()}</th>
                    <th>{Number(item.critical).toLocaleString()}</th>
                    <th>{Number(item.casesPerOneMillion).toLocaleString()}</th>
                  </tr>
*/

async function getStatsTable() {
  console.log("in getStatsTable");
  return await (
    await (await fetch("https://corona.lmao.ninja/v2/countries?sort=active")).json()
  );
}



export default StatsTable;