import React from "react";
import Links from "../constants/links";
import { Categories } from "./index";
import { IoMdClose } from "react-icons/io";

export default function Sidebar(props) {
  return (
    <aside className={props.isSidebarOpen ? "sidebar showSidebar" : "sidebar"}>
      <button
        className="close-btn"
        type="button"
        onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}
      >
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links" />
      </div>
    </aside>
  );
}
