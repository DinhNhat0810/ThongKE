import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();

  const access_token = body.access_token as string;
  const refresh_token = body.refresh_token as string;

  if (!access_token || !refresh_token) {
    return Response.json(
      { message: "Không nhận được accessToken hoặc refreshToken" },
      {
        status: 400,
      }
    );
  }

  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `access_token=${access_token}; Path=/; HttpOnly; SameSite=Lax;`
  );
  headers.append(
    "Set-Cookie",
    `refresh_token=${refresh_token}; Path=/; HttpOnly; SameSite=Lax;`
  );

  return Response.json(body, {
    status: 200,
    headers: headers,
  });
}
