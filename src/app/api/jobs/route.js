import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "jobs.json");

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return Response.json([], { status: 200 });
    }

    const fileContents = fs.readFileSync(filePath, "utf-8");
    const jobs = JSON.parse(fileContents);
    return Response.json(jobs, { status: 200 });
  } catch (error) {
    console.error("GET API Error:", error);
    return Response.json({ error: "Failed to load jobs" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.jobTitle || !body.companyName || !body.jobLocation) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    let jobs = [];
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf-8");
      jobs = JSON.parse(fileContents);
    }

    const newJob = { id: jobs.length + 1, ...body };
    jobs.push(newJob);

    fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2));

    return Response.json({ message: "Job posted successfully!" }, { status: 201 });
  } catch (error) {
    console.error("POST API Error:", error);
    return Response.json({ error: "Failed to save job" }, { status: 500 });
  }
}
