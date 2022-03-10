import jwt_decode from 'jwt-decode';

export function getDecodedAccessToken(): any {
  try {
    const token = localStorage.getItem('token') || '';
    return jwt_decode(token);
  } catch (Error) {
    return null;
  }
}

