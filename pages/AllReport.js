import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "../styles/CommonCSS.module.css";
import Sidebar from "./Sidebar";

const AllReport = () => {

  const [Report, setReport] = useState();
 
  return (
    <>
      <div className={style.container}>
        <Sidebar user = "doctor"/>

        {/* ************************************ */}

        <div className={style.AfterSideBar}>
          <div className={style.Payment_Page}>
            <h1 style={{ marginBottom: "2rem" }}>All Reports</h1>
            <div className={style.patientBox}>
              <table className={style.thead}>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Department</th>
                    <th>Doctor Name</th>
                    <th>Patient Mobile</th>
                    <th>Patient Age</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {Report?.map((ele) => {
                    return (
                      <tr className={style.tcell}>
                        <td>{ele.patientName}</td>
                        <td>{ele.docDepartment}</td>
                        <td>{ele.docName}</td>
                        <td>{ele.patientMobile}</td>
                        <td>{ele.patientAge}</td>
                        <td>{ele.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllReport;
