import Header from "./components/Header/Header";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import LoginScreen from "./components/Screens/LoginScreen/LoginScreen";
import "./_app.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { WatchScreen } from "./components/Screens/WatchScreen/WatchScreen";
import { SearchScreen } from "./components/Screens/SearchScreen";

export default function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <div className="app-container">
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
      <Route
        path="/search/:query"
        element={
          <Layout>
            <SearchScreen />
          </Layout>
        }
      />
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <WatchScreen />
          </Layout>
        }
      />
    </Routes>
  );
}
