import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// 📌 Get JSON file path
const filePath = path.join(process.cwd(), "public", "jobs.json");

// ✅ GET Job by ID
export async function GET(req, { params }) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const jobs = JSON.parse(data);

    const job = jobs.find((j) => j.id === params.id);
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load job" }, { status: 500 });
  }
}

// ✅ PUT (Update Job)
export async function PUT(req, { params }) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const jobs = JSON.parse(data);

    const jobIndex = jobs.findIndex((j) => j.id === params.id);
    if (jobIndex === -1) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const updatedJob = await req.json();
    jobs[jobIndex] = { ...jobs[jobIndex], ...updatedJob };

    // Save back to JSON file
    await fs.writeFile(filePath, JSON.stringify(jobs, null, 2), "utf-8");

    return NextResponse.json(jobs[jobIndex]);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
  }
}

// ✅ DELETE (Remove Job)
export async function DELETE(req, { params }) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    let jobs = JSON.parse(data);

    const jobIndex = jobs.findIndex((j) => j.id === params.id);
    if (jobIndex === -1) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    // Remove job
    jobs = jobs.filter((j) => j.id !== params.id);

    // Save back to JSON file
    await fs.writeFile(filePath, JSON.stringify(jobs, null, 2), "utf-8");

    return NextResponse.json({ message: "Job deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}
