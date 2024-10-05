import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless";


export async function POST(request: Request) {
    
    const db = neon(process.env.DATABASE_URL as string); 

    try {

        // SQL query to fetch data from 'cpu' table
        const query = `
            SELECT * FROM CPU;
        `;

        // Execute the query using Neon
        const result = await db.query(query);

        // Return the inserted data to the frontend
        return NextResponse.json({ success: true, data: result.rows });
    } catch (error) {
        console.error('Error inserting part:', error);
        return NextResponse.json({ success: false, message: 'Error fetching CPUs' }, { status: 500 });
    }
}
