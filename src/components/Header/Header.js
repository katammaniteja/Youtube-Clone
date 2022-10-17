import React, { useState } from "react";
import "./_header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../../redux/actions/auth.action";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  const renderHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <img
        src="https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png"
        alt="youtube-logo"
        className="header-logo"
        onClick={renderHome}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button>
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header-icons">
        <MdNotifications size={28} />
        <BiLogOut
          size={28}
          onClick={logoutHandler}
          style={{ cursor: "pointer" }}
        />
        <img
          src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
