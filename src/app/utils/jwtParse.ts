import jwtDecode from 'jwt-decode';

export function getDecodedAccessToken(accessToken?: string): any {
  try {
    const token = accessToken || localStorage.getItem('access_token') || '';
    return jwtDecode(token);
  } catch (Error) {
    return null;
  }
}
