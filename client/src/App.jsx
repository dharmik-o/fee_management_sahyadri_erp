import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard"
import "./components/AdminDashboard.css"
function App() {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
    {path : "/admin-login",element : <AdminDashboard/>}
  ]);

  return routes;
}

export default App;