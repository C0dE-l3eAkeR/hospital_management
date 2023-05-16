import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import style from "../styles/CommonCSS.module.css";
import Sidebar from "./Sidebar";

const Beds_Rooms = () => {
  const data  = ""



  const  beds  = 
    [ {
      roomNumber : 1,
      occupied : "available",
      bedNumber : 2,
      patientID : {
               patientName : "abul",
               disease : "fever",
               docID : {
                docName : "karim"
               }
      }

    },
    {
      roomNumber : 1,
      occupied : "available",
      bedNumber : 2,
      patientID : {
               patientName : "abul",
               disease : "fever",
               docID : {
                docName : "karim"
               }
      }

    },
    {
      roomNumber : 1,
      occupied : "available",
      bedNumber : 2,
      patientID : {
               patientName : "abul",
               disease : "fever",
               docID : {
                docName : "karim"
               }
      }

    }
    ]
  

  const DischargePatient = (_id) => {
    let data = {
      occupied: "available",
      _id,
    };
   
  };

 
let ind =0;
  

  return (
    <>
      <div className={style.container}>
        <Sidebar key={"1122"} user="doctor" />
        <div className={style.AfterSideBar}>
          <div className={style.Payment_Page}>
            <h1 style={{ marginBottom: "2rem" }}>All Beds</h1>
            <div className={style.patientBox}>
              <table className={style.thead}>
                <thead>
                  <tr  className={style.tcell}>
                    <th>Room</th>
                    <th>Bed</th>
                    <th>Status</th>
                    <th>Patient</th>
                    <th>Disease</th>
                    <th>Doctor</th>
                    <th>Discharge</th>
                  </tr>
                </thead>
                <tbody className={style.tcell}>
                  {beds?.map((ele) => {
                    return (
                      <tr key={ind++} className={style.tcell}>
                        <td>{ele.roomNumber}</td>
                        <td style={{ marginLeft: "1rem" }}>{ele.bedNumber}</td>
                        <td
                          style={{
                            color:
                              ele.occupied === "available" ? "green" : "orange",
                            fontWeight: "bold",
                          }}
                        >
                          {ele.occupied}
                        </td>
                        <td>
                          {ele.patientID
                            ? ele.patientID.patientName
                            : "No Data"}
                        </td>
                        <td>
                          {ele.patientID?.disease
                            ? ele.patientID.disease
                            : "No Data"}
                        </td>
                        <td>
                          {ele.patientID?.docID
                            ? ele.patientID.docID.docName
                            : "No Data"}
                        </td>
                        <td>
                          <button
                            disabled={ele.occupied === "available"}
                            style={{
                              border: "none",
                              outline: "none",
                              background: "transparent",
                              color:
                                ele.occupied === "available" ? "gray" : "red",
                              cursor:
                                ele.occupied === "available" ? "" : "pointer",
                            }}
                            onClick={() => DischargePatient(ele._id)}
                          >
                            Discharge
                          </button>
                        </td>
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

export default Beds_Rooms;
