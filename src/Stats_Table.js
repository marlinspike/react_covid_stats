import React, { useEffect, useState } from "react";
import TableRow from './TableRow'

function StatsTable(props) {
    const [data, set_data] = useState([]);
    const [sort, set_sort] = useState("active")
    const [repaint, set_repaint] = useState(false);
    
    let table_data = "";

    useEffect(() => {
      getStatsTable(sort).then((res) => {
        console.log(res);
          set_data(res);
      });
    }, [sort]);

    
    return (
      <React.Fragment>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr className="sortable">
            <th onClick={() => { set_sort("country"); }}>Country</th>
              <th onClick={() => { set_sort("cases"); }}>Cases</th>
              <th onClick={() => { set_sort("todayCases");  }}>Cases Today</th>
              <th onClick={() => { set_sort("deaths");  }}>Deaths</th>
              <th onClick={() => { set_sort("todayDeaths");  }}>Deaths Today</th>
              <th onClick={() => { set_sort("recovered");  }}>Recovered</th>
              <th onClick={() => { set_sort("active");  }}>Active</th>
              <th onClick={() => { set_sort("critical");  }}>Critical</th>
              <th onClick={() => { set_sort("casesPerOneMillion");  }}>Cases Per Million</th>
            </tr>
          </tbody>

          {data.map((item, i) => {
            return (
              <React.Fragment>
                <TableRow
                  flag={item.countryInfo.flag}
                  country={item.country}
                  cases={Number(item.cases).toLocaleString()}
                  deaths={Number(item.deaths).toLocaleString()}
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

async function getStatsTable(sort) {
  return await (
    await (await fetch(`https://corona.lmao.ninja/v2/countries?sort=${sort}`)).json()
  );
}



export default StatsTable;