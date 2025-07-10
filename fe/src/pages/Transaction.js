import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Transaction = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    type: "expense",
    category: "",
    amount: "",
    note: "",
  });

  const [transaction, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (!token) return navigate("/login");

    try {
      const decode = jwtDecode(token);
      setUserId(decode?.userId);
      fetchTransaction();
      fetchCategory();
    } catch (err) {
      navigate("/login");
    }
  }, []);

  const fetchCategory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(res?.data);
      setCategories(res?.data);
    } catch (err) {}
  };

  const fetchTransaction = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/transaction", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res?.data);

      setTransactions(res?.data?.data);
    } catch (err) {}
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(form);
    e.preventDefault();
    // try {
    //     await axios.post(
    //         "http://localhost:5000/api/transaction",
    //         {
    //             ...form,
    //             amount: parseFloat(form.amount),
    //         },
    //         { headers: { Authorization: `Bearer ${token}` } }
    //     );
    //     setForm({ type: "expense", category: "", amount: "" });
    //     fetchTransactions(); // refresh list
    // } catch (err) {
    //     alert("Failed to add transaction");
    // }
    };
    
  return (
    <div className="min-h-screen p-4 bg-gray-100">
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
        <select
          name="type"
          value={form.category}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          {categories.map((category) => (
            <option value="{category}">{category?.name}</option>
          ))}
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
    </div>
  );
};
export default Transaction;
