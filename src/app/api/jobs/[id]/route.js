import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// 📌 Get JSON file path
const filePath = path.join(process.cwd(), "public", "jobs.json");

// ✅ GET Job by ID
export async function GET(req, { params }) {
  try {
    console.log("🔍 Fetching job with ID:", params.id);

    if (!params || !params.id) {
      return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
    }

    // Read jobs.json
    const data = await fs.readFile(filePath, "utf-8");
    const jobs = JSON.parse(data);

    // Find job by ID
    const job = jobs.find((j) => String(j.id) === String(params.id));

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error("🔥 GET API Error:", error);
    return NextResponse.json({ error: "Failed to load job" }, { status: 500 });
  }
}

// ✅ PUT Update Job by ID
export async function PUT(req, { params }) {
  try {
    console.log("✏️ Updating job with ID:", params.id);
    
    const data = await fs.readFile(filePath, "utf-8");
    const jobs = JSON.parse(data);

    const jobIndex = jobs.findIndex((j) => String(j.id) === String(params.id));
    if (jobIndex === -1) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const updatedJob = await req.json();
    jobs[jobIndex] = { ...jobs[jobIndex], ...updatedJob };

    await fs.writeFile(filePath, JSON.stringify(jobs, null, 2), "utf-8");

    return NextResponse.json(jobs[jobIndex]);
  } catch (error) {
    console.error("🔥 PUT API Error:", error);
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
  }
}

// ✅ DELETE Remove Job by ID
import { jobs } from "../../../../../data/jobs.json"; // Assuming jobs data is stored

export default function handler(req, res) {
    const { id } = req.query; // Get the job ID from the request URL
  
    if (req.method === "DELETE") {
      // Simulate deleting the job (modify this based on your database logic)
      const deletedJob = { id, message: "Job deleted successfully" };
  
      return res.status(200).json(deletedJob); // Return a JSON response
    }
  
    return res.status(405).json({ error: "Method not allowed" }); // Handle unsupported methods
  }
  
