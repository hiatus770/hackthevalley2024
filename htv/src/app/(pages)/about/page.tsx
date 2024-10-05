"use client";
import React from "react";


export default async function Admin() {

    async function testApi() {
        const response = await fetch("/api/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                send: "data from front end"
            }),
        });
    }

    return (
        <>

            <p> About us </p>
        </>
    );
}