export async function GET() {
    try {
  const response = await fetch("https://zenquotes.io/api/random");
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });   
} catch (error) {
  console.log("Alıntı getirilemedi:", error);
  return new Response(JSON.stringify({ error: "Alıntı getirilemedi" }), {
    headers: { "Content-Type": "application/json" },
    status: 500,
  });
}
}