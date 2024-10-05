"use client";
import React from "react";

export default function Admin() {

    const [data, setData] = React.useState(null);

    function testApi() {
        fetch("/api/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                send: "data from front end"
            }),
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            setData(data.message);
        }).catch((error) => {
            console.log("Error: ", error);
        }); 
    }

    return (
        <>
            <h1>Admin</h1>
            <button onClick={testApi}>Test API</button>
            <p>{data}</p>
            <p> About us </p>
        </>
    );
}