// src/pages/CategoryManager.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", type: "expense" });
  const token = localStorage.getItem("token");

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(res.data);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name) return alert("Category name is required");

    try {
      await axios.post("http://localhost:5000/api/categories", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm({ name: "", type: "expense" });
      fetchCategories();
    } catch (err) {
      alert("Error adding category");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Manage Categories</h2>

        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Category name"
            className="flex-1 p-2 border rounded"
            required
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
            Add
          </button>
        </form>

        <div>
          <h3 className="font-semibold mb-2">Your Categories</h3>
          <ul className="divide-y text-sm">
            {categories.map((cat) => (
              <li key={cat.id} className="py-1 flex justify-between">
                <span className="capitalize">{cat.name}</span>
                <span className="text-gray-500">{cat.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryManager;
