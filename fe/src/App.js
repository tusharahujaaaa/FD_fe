import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CategoryManager from "./pages/CategoryManager";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/categories"
        element={
          <ProtectedRoute>
            <CategoryManager />
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/tansactions"
        element={
          <ProtectedRoute>
            <Transaction />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
