import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Login() {
const { login } = useAuth();
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


const handleSubmit = (e) => {
e.preventDefault();
try {
login(email.trim(), password);
navigate("/profile");
} catch (err) {
setError(err.message);
}
};
return (
<div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Login</h2>
{error && <div className="text-red-600 mb-2">{error}</div>}
<form onSubmit={handleSubmit} className="flex flex-col gap-3">
<label>Email<input className="border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
<label>Password<input type="password" className="border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
<button className="btn-blue text-white rounded py-2">Login</button>
</form>
<p className="text-sm mt-3">No account? <Link to="/register" className="text-blue-600 underline">Register</Link></p>
</div>
);
}