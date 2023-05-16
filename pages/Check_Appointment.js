import { Table } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import style from "../styles/CommonCSS.module.css";
import { useRouter } from 'next/router'
import Patient from "./patient";
import axios from "axios"
import {id} from './login.js'

let patientid="";
function getAllData(){

  return axios.get("http://localhost:4000/").then((res)=>{
    console.log(res.data);
  });
}


function Check_Appointment({setCng}) {
 
  const [AllAppointment, setApp] = useState([]); 
useEffect(() => {
  console.log(1);
  
  axios.get('http://localhost:4000/doctorapp/'+id).then((res) => {
    console.log(res.data)
      setApp(res.data.slice(0, 10));
    //  console.log(posts);
  })
},[]);

  const columns = [
    { title: "Patient Name", dataIndex: "patientName", key: "patientName" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "address", dataIndex: "address", key: "address" },
    { title: "Date", dataIndex: "date", key: "date" },
  ];
 const router = useRouter();
  

  const DeleteAppoint = (id) => {
    
  };

 function handl(e){
  patientid = e;
  console.log(patientid)
  setCng('1');
 
 }

  return (
    <>
      <div className={style.container}>
        <Sidebar user="doctor" />
        <div className={style.AfterSideBar}>
          <div className={style.Payment_Page}>
            <h1 style={{ marginBottom: "2rem" }}>Appointment Details</h1>
            <div className={style.patientBox}>
              <table className= {style.thead}>
                <thead>
                  <tr>
                    <th >Patient Name</th>
                    <th >Mobile</th>
                    <th >Disease</th>
                    <th >address</th>
                    <th >Date</th>
                    <th >Resolve</th>
                  </tr>
                </thead>
                <tbody className={style.tcell}> 
                  {AllAppointment?.map((ele) => {
                    return (
                      <tr className={style.tcell} onClick={()=>handl(ele.ID)}>
                        <td >{ele.patientName}</td>
                        <td>{ele.mobile}</td>
                        <td >{ele.disease}</td>
                        <td >{ele.address}</td>
                        <td >{ele.date}</td>
                        <td >
                          <button
                            style={{
                              border: "none",
                              color: "red",
                              outline: "none",
                              background: "transparent",
                              cursor: "pointer",
                            }}
                            onClick={() => DeleteAppoint(ele._id)}
                          >
                            Delete
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


const GoToP = ()=>{
  const [cng, setCng] = useState('0');
 const [value, setValue] = useState(<Check_Appointment setCng={setCng} />);

 function handleDiv() {

 }
 if(cng==='0')
 return (
  <>
  <div >{value}</div>
  </>
 )
 else {
  console.log(patientid);
 return (
  <>
 
  <Patient id={patientid}/>
  </>
 )
}
}
export default GoToP;
