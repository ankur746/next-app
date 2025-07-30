export interface User {
    id: string;
    name: string;
    email: string;
  }

export interface AuthState {
    user: User |null;
    loading: boolean;
    error: string | null;
    token: string | null;  
}
 
export interface AuthResponse {
    user: User;
    token: string;
  }