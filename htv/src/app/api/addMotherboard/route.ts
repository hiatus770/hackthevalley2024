import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless";
import addPart from '../addPart';

export async function POST(request: Request) {
    console.log("checkpoint 0");
    const db = neon(process.env.DATABASE_URL as string); 
    try {
        console.log("checkpoint 1");
        const { 
            user_name, address, contact, model_name, socket_type, chipset, ddr, pcie, 
            form_factor, power_connect, description, image, rest
        } = await request.json();
        console.log("checkpoint 2");
        // SQL query to insert data into the CPU table
        const query = `
            INSERT INTO MOTHERBOARD 
            (user_name, address, contact, model_name, socket_type, chipset, ddr, pcie, 
            form_factor, power_connect, description, image, rest)
            VALUES (${user_name}, ${address}, ${contact}, ${model_name}, ${socket_type}, ${chipset}, ${ddr}, ${pcie}, ${form_factor}, ${power_connect}, ${description}, ${image}, ${rest}) 
            RETURNING *;
        `;
        console.log("checkpoint 3");
        // Map the extracted variables to the corresponding columns
        const values = [
            user_name, 
            address, 
            contact || null,
            model_name || null, 
            socket_type || null, 
            chipset || null, 
            ddr || null, 
            pcie || null, 
            form_factor || null, 
            power_connect || null, 
            description || null,
            image || null,
            rest || null
        ];
        console.log("checkpoint 4");
        // Execute the query using Neon
        const result = await db(query);
        console.log("result");

        // Return the inserted data to the frontend
        return NextResponse.json({ success: true, result: result});
    } catch (error) {
        console.error('Error inserting CPU:', error);
        return NextResponse.json({ success: false, message: `shit went rlly wrong ${error}`}, { status: 500 });
    }
}

