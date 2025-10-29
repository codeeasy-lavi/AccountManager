import React from "react";
import { useAuth } from "../context/AuthContext";


export default function Home() {
const { user } = useAuth();
return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-4">Welcome{user ? `, ${user.name}` : ''}!</h1>
<p>This is a demo account management app built in React.</p>
</div>
);
}