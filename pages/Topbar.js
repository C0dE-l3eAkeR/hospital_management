import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { FaUserMd } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import style from "../styles/CommonCSS.module.css";

const Topbar = ({ onclick }) => {
  return (
    <>
      <div className={style.MainDiv}>
        <div className={style.Hideshow}>
          <h2>HMS</h2>
        </div>
        <div className={style.SearchDiv}>
          <input type="text" placeholder="Search Patient By Health Id...." />
        </div>
        <div className={style.IconsDiv}>
          <FaUserMd className="Icons user" />
        </div>
      </div>
    </>
  );
};

export default Topbar;
