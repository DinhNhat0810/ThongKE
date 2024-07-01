"use server";

import http from "@/lib/http";
import { cookies } from "next/headers";

const access_token = cookies().get("access_token")?.value;

export async function themDonVi(payload: any, access_tokenn: string) {
  const response = await fetch(`https://ca2einv.nacencomm.vn/api/don-vi`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_tokenn}`,
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();

  return result;
}

export async function themtaikhoan(payload: any, access_tokenn: string) {
  const response = await fetch(`https://ca2einv.nacencomm.vn/api/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_tokenn}`,
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
}

export async function daytokhai(payload: any, access_tokenn: string) {
  const response: any = await http.post<any>("/to-khai/ncm", payload, {
    headers: {
      Authorization: `Bearer ${access_tokenn}`,
    },
  });

  return response.payload;
}

export async function capnhatSLHD(payload: any, access_tokenn: string) {
  const response = await fetch(
    `https://ca2einv.nacencomm.vn/api/don-vi/chu-ky-so`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_tokenn}`,
      },
      body: JSON.stringify(payload),
    }
  );
  const result = await response.json();
  return result;
}

export async function login(payload: any) {
  const response = await fetch(
    `https://ca2einv.nacencomm.vn/api/account/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const result = await response.json();

  return result;
}
