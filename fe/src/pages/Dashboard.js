import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    type: "expense",
    category: "",
    amount: "",
    note: "",
  });
  const [transactions, setTransactions] = useState([]);
  const [userId, setUserId] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/login");

    try {
      const decoded = jwtDecode(token);
      setUserId(decoded.userId);
      fetchTransactions();
    } catch {
      navigate("/login");
    }
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/transaction", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res?.data?.data);
      console.log(res);
      
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/transaction",
        {
          ...form,
          amount: parseFloat(form.amount),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setForm({ type: "expense", category: "", amount: "" });
      fetchTransactions(); // refresh list
    } catch (err) {
      alert("Failed to add transaction");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Note (optional)"
            className="p-2 border rounded"
          />

          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Add Transaction
          </button>
        </form>

        <h3 className="text-lg font-semibold mb-3">Your Transactions</h3>
        <ul className="divide-y">
          {transactions?.map((tx) => (
            <li key={tx.id} className="py-2 flex justify-between text-sm">
              <div className="flex justify-between">
                <span className="capitalize">
                  {tx.type}: {tx.category}
                </span>
                <span className="font-semibold">₹{tx.amount}</span>
              </div>
              {tx.note && (
                <div className="text-xs text-gray-500 italic">
                  Note: {tx.note}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
