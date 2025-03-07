
import React, { createContext, useContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

// Secret key for JWT signing (in a real app, this would be in a server environment variable)
const JWT_SECRET = 'table-taste-jwt-secret';

interface User {
  name?: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
}

interface JwtPayload {
  user: User;
  exp: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for JWT token on mount
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        // Verify and decode the token
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        const currentTime = Date.now() / 1000;
        
        // Check if token is still valid (not expired)
        if (decoded.exp > currentTime) {
          setUser(decoded.user);
          setIsAuthenticated(true);
        } else {
          // Token expired, clear it
          localStorage.removeItem('auth_token');
        }
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('auth_token');
      }
    }
  }, []);

  const login = (email: string, name?: string) => {
    const userData = name ? { name, email } : { email };
    
    // Create token payload with user data and expiration (24 hours)
    const payload: JwtPayload = {
      user: userData,
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
    };
    
    // Sign the token
    const token = jwt.sign(payload, JWT_SECRET);
    
    // Save token to localStorage
    localStorage.setItem('auth_token', token);
    
    // Update state
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem('auth_token');
    
    // Update state
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
