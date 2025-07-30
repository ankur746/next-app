
export async function loginApi({ username, password }: { username: string, password: string }) { 
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
    });
    
    const data = await response.json()
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
    }
    
    return data;
}