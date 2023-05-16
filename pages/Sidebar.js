import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { GiNurseFemale } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHospitalUser } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { MdBedroomChild } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { TbBed } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import style from "../styles/CommonCSS.module.css";
import { useRouter } from 'next/router'



const Sidebar = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);
 
 const router = useRouter();
  

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div>
        <div style={{ width: isOpen ? "200px" : "70px" }} className={style.sidebar}>
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className={style.logo}>
              HMS
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
             <ImMenu onClick={toggle} style={{ cursor: "pointer" }} />
            </div>
          </div>
          {user === "admin" ? (
          <div className={style.bottomSection} onClick={()=> router.push('/FrontPage') }>
     
              <div className="icon">
                <MdDashboardCustomize className={style.mainIcon} />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className={style.link_text}
              >
                DashBoard
              </div>
              </div>
              ) : null
              }
             

             {user === "nurse" ? (
              <div onClick={()=>router.push('/patient')}>
              
                <div className="icon">
                  <CgProfile className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Profile
                </div>
              </div>
            ) : null}
            
             {/* {user === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/doctor"}
              >
                <div className="icon">
                  <FaHospitalUser className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Add Patient
                </div>
              </div>
             ) : null}*/}

            {user === "nurse" ? (
             <div onClick={()=>router.push('/book-appointment')}>
                <div className="icon">
                  <BsBookmarkPlus className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Appointments
                </div>
              </div>
            ) : null}
          
            {user === "admin" ? (
              <div onClick={()=>router.push('/AddDoctor')}>
                <div className="icon">
                  <AiOutlineUserAdd className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Add Doctor
                </div>
              </div>
            ) : null}
            {user === "admin" ? (
             <div onClick={()=>router.push('/doctors')}>
                <div className="icon">
                  <GiNurseFemale className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Add Nurse
                </div>
              </div>
            ) : null}
            {user === "admin" ? (
             <div onClick={()=>router.push('/doctors')}>
                <div className="icon">
                  <RiAdminLine
                    className={style.mainIcon}
                    style={{ color: "white" }}
                  />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Add Admin
                </div>
              </div>
            ) : null}

            {user === "admin" ? (
             <div onClick={()=>router.push('/doctors')}>
                <div className="icon">
                  <TbBed className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Add Beds
                </div>
              </div>
            ) : null}

            {user === "admin" ? (
             <div onClick={()=>router.push('/doctors')}>
                <div className="icon">
                  <FaAmbulance className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Add AMBU
                </div>
              </div>
            ) : null}
            {/* {user === "admin" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/checkpayment"}
              >
                <div className="icon">
                  <RiSecurePaymentLine className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Payments
                </div>
              </div>
            ) : null} */}

            {user === "doctor" ? (
              <div onClick={()=>router.push('/Doctor_Profile')}>
                <div className="icon">
                  <SlUserFollow className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Profile
                </div>
              </div>
            ) : null}
            {user === "doctor" ? (
            <div onClick={()=>router.push('/Beds_Rooms')}>
              <div className="icon">
                <MdBedroomChild className={style.mainIcon} />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className={style.link_text}
              >
                Beds
              </div>
            </div>) : null }
            {user === "nurse" ? (
              <div onClick={""}>
                <div className="icon">
                  <TbReportMedical className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Chat
                </div>
              </div>
            ) : null}

            {user === "nurse" ? (
              <div onClick={()=>router.push('/AllReport')}>
                <div className="icon">
                  <TbReportMedical className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Reports
                </div>
              </div>
            ) : null}
            {user === "doctor" ? (
             <div onClick={()=>router.push('/Check_Appointment')}>
                <div className="icon">
                  <BsFillBookmarkCheckFill className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Appointments
                </div>
              </div>
            ) : null}
            {user === "doctor" ? (
              <div onClick={()=>router.push('/Create_Slip')}>
                <div className="icon">
                  <BiDetail className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Create Report
                </div>
              </div>
            ) : null}
            {/* {user === "doctor" ? (
             <div onClick={()=>router.push('/doctors')}>
                <div className="icon">
                  <TbListDetails className={style.mainIcon} />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className={style.link_text}
                >
                  Patients
                </div>
              </div>
            ) : null} 
            */}
             <div onClick={()=>router.push('/login')}>
              <div className="icon">
                <FiLogOut />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className={style.link_text}
              >
                Logout
              </div>
            </div>
          </div>
            </div>
      
    </>
  );
};

export default Sidebar;
