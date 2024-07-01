export type LoginResType = {
  data: {
    token_info: {
      access_token: string;
      refresh_token: string;
    };
    is_verify_cert: boolean;
    profile: any;
  };
  is_success: boolean;
  message: string;
  status_code: number;
};
