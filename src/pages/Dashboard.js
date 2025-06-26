import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    try {
      const decoded = jwtDecode(token);
      // We only stored userId in token, so email isn't in it
      // You could fetch user data from backend later
      setEmail("User ID: " + decoded.userId);
    } catch {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow-md text-center w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <p className="mb-4 text-gray-700">Welcome back 👋</p>
        <p className="mb-6 text-sm text-gray-500">{email}</p>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
