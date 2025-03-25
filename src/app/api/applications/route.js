import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public/data/applications.json");

// Ensure the directory exists
const dirPath = path.dirname(filePath);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true }); // Create folder if it doesn't exist
}

// Ensure the file exists with an empty array if not present
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]), { encoding: "utf-8" });
}

export async function GET() {
  try {
    const applications = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    return new Response(JSON.stringify(applications), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch applications" }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const {
      name,
      email,
      phone,
      experience,
      skills,
      preferredLocation,
      currentCTC,
      expectedCTC,
      coverLetter,
      jobId,
    } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !experience || !skills || !preferredLocation || !currentCTC || !expectedCTC || !jobId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Read existing applications
    const applications = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const newApplication = {
      id: applications.length + 1,
      name,
      email,
      phone,
      experience,
      skills,
      preferredLocation,
      currentCTC,
      expectedCTC,
      coverLetter,
      jobId,
      appliedAt: new Date().toISOString(), // Timestamp
    };

    applications.push(newApplication);
    fs.writeFileSync(filePath, JSON.stringify(applications, null, 2), {
      encoding: "utf-8",
    });

    return new Response(
      JSON.stringify({ message: "Application submitted successfully", application: newApplication }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit application" }),
      { status: 500 }
    );
  }
}
