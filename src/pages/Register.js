import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Register() {
const { register } = useAuth();
const navigate = useNavigate();
const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
const [error, setError] = useState(null);


const handleSubmit = (e) => {
e.preventDefault();
if (form.password !== form.confirm) return setError("Passwords do not match");
try {
register({ name: form.name, email: form.email, password: form.password });
navigate("/profile");
} catch (err) {
setError(err.message);
}
};
return (
<div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Register</h2>
{error && <div className="text-red-600 mb-2">{error}</div>}
<form onSubmit={handleSubmit} className="flex flex-col gap-3">
<label>Full Name<input className="border p-2 rounded" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
<label>Email<input type="email" className="border p-2 rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></label>
<label>Password<input type="password" className="border p-2 rounded" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /></label>
<label>Confirm Password<input type="password" className="border p-2 rounded" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} required /></label>
<button className="btn-green text-white rounded py-2">Create Account</button>
</form>
<p className="text-sm mt-3">Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>
</div>
);
}