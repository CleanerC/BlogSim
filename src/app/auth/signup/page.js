"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('../../api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        router.push('/login')
      }
    } catch (error) {
      console.error('Signup failed:', error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) => setFormData({...formData, nickname: e.target.value})}
              >
            </input>
            <input
              type="text"
              placeholder="email"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              >
            </input>
            <input
              type="text"
              placeholder="password"
              className="w-full p-2 border rounded"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              >
            </input>
            <button
              type="submit"
              className="w-full bg-gray-600 rounded-xl text-white p-2 hover:bg-blue-500 transition-all"  
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
