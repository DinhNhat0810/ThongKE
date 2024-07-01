import http from "@/lib/http";
import { LoginResType } from "@/type/auth.type";

export const authApiRequests = {
  login: (body: any) => http.post<LoginResType>("/account/login", body),
  auth: (body: { access_token: string; refresh_token: string }) =>
    http.post("/api/auth", body, {
      baseUrl: "",
    }),
  logoutFromNextClientToNextServer: (
    force?: boolean | undefined,
    signal?: AbortSignal | undefined
  ) =>
    http.post<any>(
      "/api/auth/logout",
      {
        force,
      },
      {
        baseUrl: "",
        signal,
      }
    ),
};
