import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_loginScreen.scss";
import { login } from "../../../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginScreen() {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png"
          alt=""
        />
        <button onClick={handleLogin}>Login With Google</button>
        <p>This project is made using Youtube Data API</p>
      </div>
    </div>
  );
}
