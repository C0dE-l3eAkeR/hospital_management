import { useRouter } from 'next/router'

import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'
import { v4 as uuid } from 'uuid'
import React, { useEffect, useState } from "react";
import { Radio } from "antd";


import styles from "../styles/DLogin.module.css";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Drawer } from "antd";
import axios from 'axios';
const notify = (text) => toast(text);



export var id = {
  info:""
};

const DLogin = ({setCng, setpid, setdid}) => {


  

  console.log("componenet redered ")
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // ************************************************
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("patient");
  const [submit, setSub] = useState(0);
  const [formvalue, setFormvalue] = useState({
    ID: "",
    password: "",
  });
 useEffect(()=>{
  let link="";
  if(placement === "Doctor")
     link = 'http://localhost:4000/doctor/'+formvalue.ID;
  else if(placement === "patient")
  link = 'http://localhost:4000/patient/'+formvalue.ID;
  
  id.info=formvalue.ID;
    try {

      axios.post('http://localhost:4000/id',id).then((res) => {
      
     //console.log(posts);
})

      axios.get(link).then((res)=>{
        console.log(res.data)
     setCValue(res.data)
      })
    } catch (err  ) {
      throw new Error('Do thing failed!', { cause: err })
    }
   
  },[placement,submit])

  const [Checkvalue, setCValue] = useState({
    ID: "",
    password: "",
  });
   
 

  const Handlechange = (e) => {
    setSub(submit+1);
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  function test (a, data) {
    return a(data);
  };

  const [ForgetPassword, setForgetPassword] = useState({
    type: "",
    email: "",
  });
  const [forgetLoading, setforgetLoading] = useState(false);
  let loginFlag = 0;
  const HandleSubmit = (e) => {
    
    e.preventDefault();
    setLoading(true);
   
    if (formvalue.ID !== "" && formvalue.password !== "") {

      if(formvalue.ID == Checkvalue.ID && formvalue.password == Checkvalue.password)loginFlag =1;
      if (placement === "patient") {
       
        let data = {
          ...formvalue,
          patientID: formvalue.ID,
        };
      }
        else if (placement === "Doctor") {
          
          let data = {
            ...formvalue,
            docID: formvalue.ID,
          };
          id = formvalue.ID;
        }
          else if (placement === "Admin") {
           
            let data = {
              ...formvalue,
              adminID: formvalue.ID,
            };
          };
let i=1;
         {
          if (placement === "Admin") {
            notify("Login Successful");
            setLoading(false);
             //setCng(1);
             router.push('./Doctor_Profile')
          }
         else if (placement === "patient" && loginFlag === 1) {
            notify("Login Successful");
            setLoading(false);
            //setCng(2);
            router.push('./patients')
            
          }
        else  if (placement === "Doctor" && loginFlag === 1  ) {
            notify("Login Successful");
            setLoading(false);
         // setCng(3);
         router.push('./Doctor_Profile')

            
          }
          else {
          
            setLoading(false);
            notify("Something went Wrong, Please Try Again");
           
          }
        };
      } 
  }
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };



  const HandleForgetPassword = (e) => {
    setForgetPassword({ ...ForgetPassword, [e.target.name]: e.target.value });
  };

  

  const HandleChangePassword = () => {
    if (ForgetPassword.type === "") {
      return notify("Please Fill all Details");
    }
    setforgetLoading(true);
    dispatch(forgetPassword(ForgetPassword)).then((res) => {
      if (res.message === "User not found") {
        setforgetLoading(false);
        return notify("User Not Found");
      }
      setForgetPassword({
        type: "",
        email: "",
      });
      onClose();
      setforgetLoading(false);
      return notify("Account Details Send");
    });
  };

  return (
    <>
      <ToastContainer />

      <div className={styles.mainLoginPage}>
        <div className={styles.leftside}>
          <img src="./banner.png" alt="banner" />
        </div>
        <div className={styles.rightside}>
          <h1>Login</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
              className={styles.radiogroup}
            >
              <Radio.Button value="patient" className={styles.radiobutton}>
                Patient
              </Radio.Button>
              <Radio.Button value="Doctor" className={styles.radiobutton}>
                Doctor
              </Radio.Button>
              <Radio.Button value="Admin" className={styles.radiobutton}>
                Admin
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className={styles.Profileimg}>
            <img src="./doctoravatar.png" alt="profile" />
          </div>
          <div>
            <p>ID - any</p>
            <p>Password - any</p>
            <form onSubmit={HandleSubmit}> 
              <h3 className ={styles.form}>{placement} ID</h3>
              <input
                type="text"
                name="ID"
                value={formvalue.ID}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              <button type="submit">{Loading ? "Loading..." : "Submit"}</button>
              <p style={{ marginTop: "10px" }}>
                Forget Password?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={showDrawer}
                >
                  Get it on Email !
                </span>
              </p>

              {/* ********************************************************* */}
              <Drawer
                title="Forget Password"
                placement="left"
                onClose={onClose}
                open={open}
              >
                <div>
                  <label style={{ fontSize: "18px" }}>Choose Type</label>

                  <select
                    name="type"
                    value={ForgetPassword.type}
                    onChange={HandleForgetPassword}
                    required
                  >
                    <option value="">User Type</option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "18px" }}>
                    Enter Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    name="email"
                    value={ForgetPassword.email}
                    onChange={HandleForgetPassword}
                    required
                    style={{
                      width: "100%",
                      height: "3rem",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#bce0fb",
                      fontSize: "18px",
                      marginTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                </div>

                <button
                  style={{
                    width: "50%",
                    margin: " 20px auto",
                    display: "flex",
                    padding: "10px",
                    fontSize: "18px",
                    backgroundColor: "#ff9f9f",
                    border: "none",
                    borderRadius: "7px",
                    cursor: "pointer",
                    justifyContent: "center",
                  }}
                  onClick={HandleChangePassword}
                >
                  {forgetLoading ? "Loading..." : " Send Mail"}
                </button>
              </Drawer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;
