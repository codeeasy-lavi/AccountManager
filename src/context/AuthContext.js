import React, { createContext, useContext, useEffect, useState } from "react";


const USERS_KEY = "app_users_v1";
const SESSION_KEY = "app_session_v1";


const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);


function loadUsers() {
try {
return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
} catch {
return [];
}
}
function saveUsers(users) {
localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function getSession() {
try {
return JSON.parse(localStorage.getItem(SESSION_KEY));
} catch {
return null;
}
}
function setSession(user) {
localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}
function clearSession() {
localStorage.removeItem(SESSION_KEY);
}


export function AuthProvider({ children }) {
const [user, setUser] = useState(() => getSession());


useEffect(() => {
const onStorage = (e) => {
if (e.key === SESSION_KEY) setUser(getSession());
};
window.addEventListener("storage", onStorage);
return () => window.removeEventListener("storage", onStorage);
}, []);
const register = ({ name, email, password }) => {
const users = loadUsers();
if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
throw new Error("Email already registered");
}
const newUser = { id: Date.now().toString(), name, email, password };
users.push(newUser);
saveUsers(users);
setSession(newUser);
setUser(newUser);
};


const login = (email, password) => {
const users = loadUsers();
const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
if (!found) throw new Error("Invalid credentials");
setSession(found);
setUser(found);
};


const logout = () => {
clearSession();
setUser(null);
};


const updateProfile = (updates) => {
const users = loadUsers();
const idx = users.findIndex((u) => u.id === user.id);
if (idx === -1) throw new Error("User not found");
const updated = { ...users[idx], ...updates };
users[idx] = updated;
saveUsers(users);
setSession(updated);
setUser(updated);
};


const deleteAccount = () => {
const remaining = loadUsers().filter((u) => u.id !== user.id);
saveUsers(remaining);
logout();
};


return (
<AuthContext.Provider value={{ user, register, login, logout, updateProfile, deleteAccount }}>
{children}
</AuthContext.Provider>
);
}