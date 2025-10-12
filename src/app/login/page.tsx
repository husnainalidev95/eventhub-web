'use client';
import { Suspense } from 'react';
import { LoginPage } from "@/components/LoginPage";

function LoginContent() {
  const handleLogin = (role?: 'user' | 'organizer' | 'admin') => {
    console.log(`Logged in as ${role}`);
    // Here you could also update global state, set cookies, etc.
  };

  return (
    <LoginPage onLogin={handleLogin} />
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}