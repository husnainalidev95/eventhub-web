'use client';
import { LoginPage } from "@/components/LoginPage";

export default function Login() {
  const handleLogin = (role?: 'user' | 'organizer' | 'admin') => {
    console.log(`Logged in as ${role}`);
    // Here you could also update global state, set cookies, etc.
  };

  return (
    <LoginPage onLogin={handleLogin} />
  );
}