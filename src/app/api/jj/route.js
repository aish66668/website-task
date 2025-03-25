import { NextResponse } from "next/server";
import fs from "fs/promises"; // Import file system module
import path from "path";

// 📌 Get JSON file path
const filePath = path.join(process.cwd(), "public", "jobs.json");

// ✅ GET All Jobs
export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const jobs = JSON.parse(data);
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load jobs" }, { status: 500 });
  }
}

// ✅ POST Create a New Job
export async function POST(req) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const jobs = JSON.parse(data);

    const newJob = await req.json();
    if (!newJob.jobTitle || !newJob.companyName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Assign a new ID and add job
    newJob.id = (jobs.length + 1).toString();
    jobs.push(newJob);

    // Save back to file
    await fs.writeFile(filePath, JSON.stringify(jobs, null, 2), "utf-8");

    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}
