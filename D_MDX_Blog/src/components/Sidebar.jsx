import React from "react";
import Links from "../constants/links";
import { Categories } from "./index";
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
  return (
    <aside className={`sidedar showSidebar`}>
      <button className="close-btn">
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links" />
      </div>
    </aside>
  );
}
