export async function POST(req) {
  try {
    const data = await req.json();

    const response = await fetch("https://script.google.com/macros/s/AKfycbxyzGVxM3kFb05fw0yd5_OBWtb3guo0C3qckZ5o3_qz414qvFy6W_fR0RvORceALNqMkg/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to forward request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}