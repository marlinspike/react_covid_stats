import React, { useEffect, useState } from 'react';

function AppHeader(props) {
    const [localTime, setLocalTime] = useState("");
    
    useEffect(() => {
        const apiUrl = "http://worldtimeapi.org/api/timezone/EST";
        getDateTime().then(res => {
            console.log(res);
            setLocalTime(res);
        });
    }, []);

    return (
      <div>
            <h1>Hello, {props.name}. Time: {localTime.datetime}</h1>
            <ul><li>Day of year: {localTime.day_of_year}</li></ul>
            <ul><li>Day of week: {localTime.day_of_week}</li></ul>
            <ul><li>Client IP: {localTime.client_ip}</li></ul>
      </div>
    );
}

async function getDateTime() {
    return await (await fetch("http://worldtimeapi.org/api/timezone/EST")).json();
}

export default AppHeader;