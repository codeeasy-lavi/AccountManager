# React Account Manager

A simple **React app** that lets users create accounts, log in, and manage their personal information — all without a backend.  
Built with **React Router**, **Context API**, and **localStorage**, it’s lightweight and easy to run anywhere.

---

## 🚀 What You Can Do

- 🧾 Register a new account  
- 🔑 Log in securely  
- 👤 View or update your profile  
- ❌ Delete your account if needed  
- 🔒 Enjoy protected routes (only logged-in users can see their profile)  
- 🎨 Comes with clean, responsive styling

---

## 🛠️ Tech Stack 

- **React (v16+)**
- **React Router DOM (v6+)**
- **Context API**
- **LocalStorage**
- **Custom CSS**

---
## 🎨  Styling

All visual styles are in src/App.css.
The app uses a minimal, modern look with:

A dark navbar

Blue and green buttons

Centered login and registration cards

You can easily customize colors and spacing by editing App.css.

## 🔒 Authentication Logic

User details are saved locally in localStorage under:

**app_users_v1**

**app_session_v1**

Logged-in users stay signed in even after refreshing.

Clicking Logout clears the session immediately.

Account deletion removes both the session and stored data.

