import { Table } from "antd";
import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import style from "../styles/CommonCSS.module.css";
import TextArea from "antd/es/input/TextArea";


const FrontPage = () => {
  const columns = [
    { title: "Name", dataIndex: "patientName", key: "patientName" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  const user = "admin";
 const data = {
  doctor : 5,
  nurse : 4,
  bed : 10,
  patient : 1,
  admin : 2,
  ambulance : 3,
  appointment :4,
  report :7 
 }

 


  return (
    <div className={style.container}>
      <Sidebar user={user} />
      <div className={style.AfterSideBar}>
        <h1 style={{ color: "rgb(184 191 234)" }}>Overview</h1>
        <div className={style.maindiv}>
          <div className={style.commondiv}>
            <div>
              <h1>{data.doctor}</h1>
              <p>Doctor</p>
            </div>
            <MdPersonAdd className={style.overviewIcon} />
          </div>
          <div className={style.commondiv}>
            {" "}
            <div>
              <h1>{data.nurse}</h1>
              <p>Nurse</p>
            </div>
            <FaUserNurse className={style.overviewIcon} />
          </div>
          <div className={style.commondiv}>
            <div>
              <h1>{data.patient}</h1>
              <p>Patient</p>
            </div>
            <RiEmpathizeLine className={style.overviewIcon} />
          </div>
          <div className={style.commondiv}>
            {" "}
            <div>
              <h1>{data.admin}</h1>
              <p>Admin</p>
            </div>
            <RiAdminLine className={style.overviewIcon} />
          </div>
          <div className={style.commondiv}>
            {" "}
            <div>
              <h1>{data.bed}</h1>
              <p>Beds</p>
            </div>
            <FaBed className={style.overviewIcon} />
          </div>

          <div className={style.commondiv}>
            {" "}
            <div>
              <h1>{data.ambulance}</h1>
              <p>Ambulance</p>
            </div>
            <FaAmbulance className={style.overviewIcon} />
          </div>
          <div className={style.commondiv}>
            {" "}
            <div>
              <h1>{data.appointment}</h1>
              <p>Appointment</p>
            </div>
            <BsFillBookmarkCheckFill className={style.overviewIcon} />
          </div>
          <div className={style.commondiv}>
            {" "}
            <div>
              <h1>{data.report}</h1>
              <p>Reports</p>
            </div>
            <MdPayment className={style.overviewIcon}/>
          </div>
        </div>
        {/* ************************************* */}
        <div className={style.patientDetails}>
          <h1>Notification</h1>
          <div className={style.patientBox}>
            <TextArea style={{'height':'300%'}}></TextArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
  