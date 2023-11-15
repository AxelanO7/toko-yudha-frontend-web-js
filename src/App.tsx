import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from "./pages/MainPage";
import LogiAdminPage from "./pages/admin/Login_admin_page";
import LoginPage from "./pages/customer/login_page";
import RegisterPage from "./pages/customer/register_page";
import HomePage from "./pages/customer/home_page";
import EditCustomerPage from "./pages/customer/edit_customer";
import UserPage from "./pages/admin/user_page";
import CustomerPage from "./pages/admin/customer_page";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="login-admin" element={<LogiAdminPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="edit-customer" element={<EditCustomerPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="customer" element={<CustomerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;