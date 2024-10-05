

import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
    const { send } = await request.json();  
    console.log("DATA FROM FRONTEND: ", send); 
    // Return json to clientsid
    return NextResponse.json({message: "Data from server!"});
}