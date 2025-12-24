// Simple in-memory storage for demonstration
// In a real app, you would use cookies, localStorage, or sessions

let currentUser: { id: string; username: string } | null = null;

// Hardcoded password for demonstration
const CORRECT_PASSWORD = "secret123";

export const auth = {
  login: (password: string): boolean => {
    if (password === CORRECT_PASSWORD) {
      currentUser = { id: "1", username: "demoUser" };
      return true;
    }
    return false;
  },

  logout: (): void => {
    currentUser = null;
  },

  isAuthenticated: (): boolean => {
    return currentUser !== null;
  },

  getCurrentUser: () => {
    return currentUser;
  },
};
