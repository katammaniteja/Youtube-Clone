import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({ HandleSidebar }) => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <div className="header">
      <FaBars
        className="header-menu"
        size={26}
        onClick={() => HandleSidebar()}
      />
      <img
        src="https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png"
        alt="youtube-logo"
        className="header-logo"
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
        <MdApps size={28} />
        <img
          src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
