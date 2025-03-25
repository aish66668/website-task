import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ error: "No user data found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const fileContents = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileContents || "[]");

    return new Response(JSON.stringify(users, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to load data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.email || !body.password) {
      return new Response(JSON.stringify({ error: "Email and password required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    let users = [];
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf-8");
      users = JSON.parse(fileContents || "[]");
    }

    if (body.type === "register") {
      const userExists = users.some((user) => user.email === body.email);
      if (userExists) {
        return new Response(JSON.stringify({ error: "User already exists" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const newUser = {
        id: users.length + 1,
        name: body.name || "",
        email: body.email,
        password: body.password,
      };
      users.push(newUser);
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

      return new Response(JSON.stringify({ message: "Registration successful!" }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (body.type === "login") {
      const user = users.find(
        (user) => user.email === body.email && user.password === body.password
      );

      if (!user) {
        return new Response(JSON.stringify({ error: "Invalid email or password" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ message: "Login successful!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid request type" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
