import http from "@/lib/http";

export const userApiRequests = {
  themttdonvi: (body: any) => http.post<any>("/don-vi", body, {}),
  themuser: (body: any) => http.put<any>("/user", body),
  daytokhai: (body: any) => http.post<any>("/to-khai/ncm", body),
};
