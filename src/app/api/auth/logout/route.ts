export async function POST(request: Request) {
  const res = await request.json();
  const headers = new Headers();

  headers.append(
    "Set-Cookie",
    `access_token=; Path=/; HttpOnly; SameSite=Lax; `
  );
  headers.append(
    "Set-Cookie",
    `refresh_token=; Path=/; HttpOnly; SameSite=Lax; `
  );

  return Response.json(
    {
      message: "Đăng xuất thành công",
    },
    {
      status: 200,
      headers: headers,
    }
  );
}
