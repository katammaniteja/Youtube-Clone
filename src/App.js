import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import LoginScreen from "./components/Screens/LoginScreen/LoginScreen";
import "./_app.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
  const [sidebar, toggleSidebar] = useState(false);

  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  const HandleSidebar = () => {
    toggleSidebar((value) => !value);
  };

  const Layout = ({ children }) => {
    return (
      <>
        <Header HandleSidebar={HandleSidebar} />
        <div className="app-container">
          <Sidebar sidebar={sidebar} HandleSidebar={HandleSidebar} />
          <div className="container-fluid app-main">{children}</div>
        </div>
      </>
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
        path="/auth"
        element={
          <Layout>
            <LoginScreen />
          </Layout>
        }
      />
    </Routes>
  );
}
