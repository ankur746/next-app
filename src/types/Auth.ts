export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: "male" | "female" | "other";
    image: string;
    accessToken: string;
    refreshToken: string;
  }

export interface AuthState {
    user: User |null;
    loading: boolean;
    error: string | null;
    // token: string | null;  
}
 
export interface AuthResponse {
    user: User;
    token: string;
  }