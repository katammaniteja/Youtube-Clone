import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.action";

export default function Sidebar({ sidebar, HandleSidebar }) {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className={sidebar ? "sidebar open" : "sidebar"}>
      <li>
        <MdHome size={23} onClick={() => HandleSidebar()} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} onClick={() => HandleSidebar()} />
        <span>Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23} onClick={() => HandleSidebar()} />
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} onClick={() => HandleSidebar()} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} onClick={() => HandleSidebar()} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} onClick={() => HandleSidebar()} />
        <span>I don't know</span>
      </li>
      <hr />
      <li onClick={logoutHandler}>
        <MdExitToApp size={23} onClick={() => HandleSidebar()} />
        <span>Logout</span>
      </li>
      <hr />
    </nav>
  );
}
