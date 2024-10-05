import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless";


export async function POST(request: Request) {
    
    const db = neon(process.env.DATABASE_URL as string); 

    try {
<<<<<<<< HEAD:htv/src/app/api/fetchUser/route.ts
        // Query the database with Neon
        const { id } = await request.json();
        const query = `SELECT * FROM USERS WHERE id = ${id};`;
        const result = await db(query);
========

        // SQL query to fetch data from 'cpu' table
        const query = `
            SELECT * FROM CPU;
        `;

        // Execute the query using Neon
        const result = await db.query(query);
>>>>>>>> parent of c9548eb (Co-authored-by: TCC <AnExerciseForTheReader@users.noreply.github.com>):htv/src/app/api/getCpu/route.ts

        // Return the inserted data to the frontend
        return NextResponse.json({ success: true, data: result.rows });
    } catch (error) {
<<<<<<<< HEAD:htv/src/app/api/fetchUser/route.ts
        console.error('Error retrieving part:', error);
========
        console.error('Error inserting part:', error);
>>>>>>>> parent of c9548eb (Co-authored-by: TCC <AnExerciseForTheReader@users.noreply.github.com>):htv/src/app/api/getCpu/route.ts
        return NextResponse.json({ success: false, message: 'Error fetching CPUs' }, { status: 500 });
    }
}
