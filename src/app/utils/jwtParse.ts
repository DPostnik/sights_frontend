import jwtDecode from 'jwt-decode';

export function getDecodedAccessToken(): any {
    try {
        const token = localStorage.getItem('token') || '';
        return jwtDecode(token);
    } catch (Error) {
        return null;
    }
}
