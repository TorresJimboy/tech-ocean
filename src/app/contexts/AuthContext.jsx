import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const storedUser = localStorage.getItem('techocean_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = (email, password, name) => {
    // Mock signup - in production, this will use Supabase
    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date().toISOString()
    };
    
    // Store user data (in production, this will be in Supabase)
    localStorage.setItem('techocean_user', JSON.stringify(newUser));
    localStorage.setItem(`user_${email}`, JSON.stringify({ email, password, ...newUser }));
    
    setUser(newUser);
    return { success: true };
  };

  const login = (email, password) => {
    // Mock login - in production, this will use Supabase Auth
    const storedUserData = localStorage.getItem(`user_${email}`);
    
    if (!storedUserData) {
      return { success: false, error: 'User not found' };
    }

    const userData = JSON.parse(storedUserData);
    if (userData.password !== password) {
      return { success: false, error: 'Invalid password' };
    }

    const user = {
      id: userData.id,
      email: userData.email,
      name: userData.name,
      createdAt: userData.createdAt
    };

    localStorage.setItem('techocean_user', JSON.stringify(user));
    setUser(user);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('techocean_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
