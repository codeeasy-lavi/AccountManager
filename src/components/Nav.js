import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Nav() {
const { user, logout } = useAuth();
const navigate = useNavigate();
return (
<nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
<div className="flex items-center gap-4">
<Link to="/" className="font-bold text-lg">AccountApp</Link>
<Link to="/" className="hover:underline">Home</Link>
{user && <Link to="/profile" className="hover:underline">Profile</Link>}
</div>
<div>
{!user ? (
<div className="flex gap-2">
<Link to="/login" className="px-3 py-1 bg-blue-500 rounded">Login</Link>
<Link to="/register" className="px-3 py-1 bg-green-500 rounded">Register</Link>
</div>
) : (
<div className="flex items-center gap-3">
<span className="text-sm">{user.name}</span>
<button onClick={() => { logout(); navigate('/login'); }} className="px-3 py-1 bg-red-500 rounded">Logout</button>
</div>
)}
</div>
</nav>
);
}