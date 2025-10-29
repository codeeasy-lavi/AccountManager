import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";


export default function Profile() {
const { user, updateProfile, deleteAccount } = useAuth();
const [editing, setEditing] = useState(false);
const [form, setForm] = useState({ name: "", email: "", password: "" });


useEffect(() => {
if (user) setForm({ name: user.name, email: user.email, password: user.password });
}, [user]);


const handleSave = (e) => {
e.preventDefault();
updateProfile(form);
setEditing(false);
};
return (
<div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Your Profile</h2>
{!editing ? (
<div className="space-y-2">
<p><strong>Name:</strong> {user.name}</p>
<p><strong>Email:</strong> {user.email}</p>
<button onClick={() => setEditing(true)} className="bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
<button onClick={deleteAccount} className="bg-red-600 text-white px-3 py-1 rounded ml-2">Delete</button>
</div>
) : (
<form onSubmit={handleSave} className="flex flex-col gap-3">
<label>Name<input className="border p-2 rounded" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
<label>Email<input type="email" className="border p-2 rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></label>
<label>Password<input type="password" className="border p-2 rounded" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required /></label>
<div className="flex gap-2">
<button className="bg-green-600 text-white px-3 py-1 rounded">Save</button>
<button type="button" onClick={() => setEditing(false)} className="bg-gray-300 px-3 py-1 rounded">Cancel</button>
</div>
</form>
)}
</div>
);
}