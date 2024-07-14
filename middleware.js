// middleware.js
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname, searchParams } = req.nextUrl;

  if (pathname.startsWith("/api/proxy")) {
    const targetUrl = new URL("https://api.timbu.cloud/");
    targetUrl.search = searchParams.toString();

    const response = await fetch(targetUrl.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const backupUrl = new URL(
        "https://timbu-get-all-products.reavdev.workers.dev/"
      );
      backupUrl.search = searchParams.toString();

      const backupResponse = await fetch(backupUrl.toString(), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!backupResponse.ok) {
        return new NextResponse(
          JSON.stringify({
            error: "Failed to fetch data from both primary and backup APIs",
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      const backupData = await backupResponse.json();
      return NextResponse.json(backupData);
    }

    const data = await response.json();
    return NextResponse.json(data);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/proxy/:path*",
};
