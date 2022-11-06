export interface AuthDTO {
  status?: string;
  authorisation?: Authorization;
}
export interface Authorization {
  token: string;
  typ: string;
}
