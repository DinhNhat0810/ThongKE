import { LoginResType } from "@/type/auth.type";
import { normalizePath } from "../../utils/commom";
import { redirect } from "next/navigation";
import envConfig from "@/config";

type CustomOptions = Omit<RequestInit, "method"> & {
  baseUrl?: string | undefined;
};

const ENTITY_ERROR_STATUS = 422;
const AUTHENTICATION_ERROR_STATUS = 401;
const ACCESS_TOKEN_EXPIRED_STATUS = 403;

export const isClient = typeof window !== "undefined";

type EntityErrorPayload = {
  message: string;
  errors: {
    field: string;
    message: string;
  }[];
};

export class HttpError extends Error {
  status: number;
  payload: {
    message: string;
    [key: string]: any;
  };
  constructor({ status, payload }: { status: number; payload: any }) {
    super("Http Error");
    this.status = status;
    this.payload = payload;
  }
}

export class EntityError extends HttpError {
  status: 422;
  payload: EntityErrorPayload;
  constructor({
    status,
    payload,
  }: {
    status: 422;
    payload: EntityErrorPayload;
  }) {
    super({ status, payload });
    this.status = status;
    this.payload = payload;
  }
}

let clientLogoutRequest: null | Promise<any> = null;

const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options?: CustomOptions | undefined
) => {
  const body = options?.body
    ? options?.body instanceof FormData
      ? options?.body
      : JSON.stringify(options?.body)
    : undefined;
  const baseHeaders: {
    [key: string]: string;
  } =
    body instanceof FormData
      ? {}
      : {
          "Content-Type": "application/json",
        };

  if (isClient) {
    const accessToken = JSON.parse(localStorage.getItem("user") || "{}")
      ?.token_info?.access_token;
    if (accessToken) {
      baseHeaders.Authorization = `Bearer ${accessToken}`;
    }
  }

  const baseUrl =
    options?.baseUrl === undefined
      ? envConfig.NEXT_PUBLIC_API_ENDPOINT
      : options.baseUrl;

  const fullUrl = url.startsWith("/")
    ? `${baseUrl}${url}`
    : `${baseUrl}/${url}`;

  let res: any;

  try {
    res = await fetch(fullUrl, {
      ...options,
      headers: {
        ...baseHeaders,
        ...options?.headers,
        "ACCESS-CONTROL-ALLOW-ORIGIN": "*",
        "ACCESS-CONTROL-ALLOW-METHODS": "*",
      } as any,
      body,
      method,
    });
  } catch (error) {
    return new HttpError({
      status: 500,
      payload: {
        message: "Internal Server Error",
      },
    });
  }

  const payload: Response = await res.json();

  const data = {
    status: res.status,
    payload,
  };

  if (!res.ok) {
    if (res.status === ENTITY_ERROR_STATUS) {
      throw new EntityError(
        data as {
          status: 422;
          payload: EntityErrorPayload;
        }
      );
    } else if (res.status === AUTHENTICATION_ERROR_STATUS) {
      return data;
    } else if (res.status === ACCESS_TOKEN_EXPIRED_STATUS) {
    } else {
      return data;
    }
  }

  if (isClient) {
    if (["auth/login"].some((item) => item === normalizePath(url))) {
      const newPayload: LoginResType = payload as LoginResType;
      console.log(newPayload, "newPayload");
    } else if ("auth/logout" === normalizePath(url)) {
    }
  }

  return data;
};

const http = {
  get<Response>(
    url: string,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("GET", url, options);
  },
  post<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("POST", url, { ...options, body });
  },
  put<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("PUT", url, { ...options, body });
  },
  delete<Response>(
    url: string,
    options?: Omit<CustomOptions, "body"> | undefined
  ) {
    return request<Response>("DELETE", url, { ...options });
  },
  // download(url: string) {
  //   if (isClient) {
  //     const accessToken = localStorage.getItem("accessToken");
  //     const baseHeaders: {
  //       [key: string]: string;
  //     } = { Authorization: `Bearer ${accessToken}` };
  //     const fullUrl = url.startsWith("/")
  //       ? `${envConfig.NEXT_PUBLIC_API_ENDPOINT}${url}`
  //       : `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/${url}`;
  //     return fetch(fullUrl, {
  //       headers: baseHeaders,
  //       method: "GET",
  //     });
  //   }
  // },
};

export default http;
