export async function GET() {
  return new Response(
    JSON.stringify({
      clerkSecretKey: process.env.CLERK_SECRET_KEY ? "set" : "missing",
    }),
    { status: 200 }
  );
}
