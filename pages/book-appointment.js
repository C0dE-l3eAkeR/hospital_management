import React, { useState,useEffect } from "react";
import { CommonProblem } from "../pages/MixedObjectData.js";
import style from "../styles/Book_appointment.module.css";
import style2 from "../styles/CommonCSS.module.css";
import style3 from "../styles/AddDoctor.module.css";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

const Book_Appointment = () => {
  
  const [Loading, setLoading] = useState(false);

  const InitValue = {
    patientName: "",
    bloodGroup:"",
    age: "",
    gender: "",
    mobile: "",
    disease: "",
    address: "",
    email: "",
    doctorid: "",
    date: "",
    time: "",
  };
  const kk = {
    patientName: "sdklf",
    age: "34",
    bloodGroup : "",

    gender: "sdf",
    mobile: "cm",
    disease: "skkf",
    address: "lf",
    email: "opwe",
    doctorid: "pdf",
    date: "3553",
    time: "5656",
  };
  const [doctors, setDoc] = useState([])
  useEffect(
   ()=>{ 
  axios.get('http://localhost:4000/doctors').then((res)=>{
   
   setDoc(res.data.slice(0, 10))
   console.log(doctors)
   })

  },[])
  
  var docName =[{name:"Haider", id:"Haider"}];
  doctors.map(res=>{docName.push({name:res.docName, id:res.ID})})
 
  const [BookAppoint, setBookAppoint] = useState(InitValue);

  function HandleAppointment(e) {
    console.log(e.target.name);
   setBookAppoint({ ...BookAppoint, [e.target.name]: e.target.value });
  };
 function handldid(e){
  console.log(e);
  BookAppoint.doctorid = e;

 }
  const HandleOnsubmitAppointment = (e) => {
    //e.preventDefault();

    if (BookAppoint.gender === "" || BookAppoint.doctor === "") {
      return notify("Please fill all the Details");
    }
    console.log({BookAppoint});
    setLoading(true);
        notify("Appointment Booked");
        setLoading(false);
        //setBookAppoint(InitValue);
      

axios.post('http://localhost:4000/patient',BookAppoint).then((res) => {
      
     //console.log(posts);
})

  }
  return (
    <>
      <ToastContainer />
      <div className={style2.container}>
        <Sidebar />
        <div className={style2.AfterSideBar}>
          <div className={style3.Main_Add_Doctor_div}>
            <h1>Book Appointment</h1>
            <form onSubmit={HandleOnsubmitAppointment}>
              {/* Name PlaceHolder */}
              <div>
                <label>Patient Name</label>
                <div className={style3.inputdiv}>
                  <input 
                   className={style3.aain}
                    type="text"
                    placeholder="First Name"
                    name="patientName"
                    value={BookAppoint.patientName}
                    onChange={(e)=>HandleAppointment(e)}
                    required
                  />
                </div>
              </div>
              {/* AGE PLACEHOLDER  */}
              <div>
                <label>Age</label>
                <div className={style3.inputdiv}>
                  <input className={style3.aain}
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={BookAppoint.age}
                    onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              {/* GENDER PLACEHOLDER  */}
              <div>
                <label>Gender</label>
                <div className={style3.inputdiv}>
                  <select className={style3.aain}
                    name="gender"
                    value={BookAppoint.gender}
                    onChange={HandleAppointment}
                    required
                  >
                    <option value="Choose Blood Group">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              {/* MOBILE PLACEHOLDER */}
              <div>
                <label>Contact Number</label>
                <div className={style3.inputdiv}>
                  <input className={style3.aain}
                    type="number"
                    placeholder="Number"
                    name="mobile"
                    value={BookAppoint.mobile}
                    onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className={style3.inputdiv}>
                  <input className={style3.aain}
                    type="email"
                    placeholder="example@email.com"
                    name="email"
                    value={BookAppoint.email}
                    onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              {/* PROBLEM PLACEHOLDER */}
              <div>
                <label>Blood Group</label>
                <div className={style3.inputdiv}>
                  <select className={style3.aain}
                    name="disease"
                    value={BookAppoint.bloodGroup}
                    onChange={(e) => {
                      HandleAppointment(e);
                    }}
                    required
                  >
                    <option value="Choose Blood Group">Select bloodGroup</option>
                    {CommonProblem.map((ele, i) => {
                      return (
                        <option key={i} value={ele.title}>
                          {ele.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* ENTER SAMPLE DISEASE */}

              {/* ADDRESS SECTION  */}

              <div>
                <label>Address</label>
                <div className={style3.inputdiv}>
                  <input className={style3.aain}
                    type="text"
                    placeholder="Address line 1"
                    name="address"
                    value={BookAppoint.address}
                    onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              {/* doctor SECTION */}

              <div>
                <label>Doctor</label>
                <div className={style3.inputdiv}>
                  <select className={style3.aain}
                    name="doctorid"
                    value={BookAppoint.doctorid}
                    onChange={HandleAppointment}
                    
                    required
                  >
                    {docName.map(list => <option >{list.id}</option>)
                    }
                  </select>
                </div>
              </div>
              {/* APPOINTMENT DATE  */}
              <div className={style.dateofAppointment}>
                <p>Date and Time </p>
                <div className={style3.inputdiv}>
                  <input className={style3.aain}
                    type={"date"}
                    placeholder="Choose Date"
                    name="date"
                    value={BookAppoint.date}
                    onChange={HandleAppointment}
                    required
                  />
                  <input className={style3.aain}
                    type={"time"}
                    placeholder="Choose Time"
                    name="time"
                    value={BookAppoint.time}
                    onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>

              <button type="submit" className={style.book_formsubmitbutton}>
                {Loading ? "Loading..." : "Book Appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  
};

export default Book_Appointment;
