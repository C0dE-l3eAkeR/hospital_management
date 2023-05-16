import React, { useState } from "react";
import style from "../styles/AddDoctor.module.css";

//import { useDispatch, useSelector } from "react-redux";
//import { DoctorRegister, SendPassword } from "../../../../../Redux/auth/action";
import Sidebar from "./Sidebar";
import style2 from "../styles/CommonCSS.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router'
const notify = (text) => toast(text);

const AddDoctor = () => {
  

  
  const router =  useRouter();
  const [loading, setLoading] = useState(false);

  const initData = {
    docName: "",
    age: "",
    mobile: "",
    email: "",
    bloodGroup: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    department: "",
    docID: Date.now(),
    password: "",
    details: "",
  };

  const [DoctorValue, setDoctorValue] = useState(initData);

  const HandleDoctorChange = (e) => {
    setDoctorValue({ ...DoctorValue, [e.target.name]: e.target.value });
  };
  const res = {
    message : ""
  }
  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  {
      if (res.message === "Doctor already exists") {
        setLoading(false);
        return notify("Doctor Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }

      let data = {
        email: e.target.email,
        password: e.target.password,
        userId: e.target.docID,
      };
      console.log(data, "DOCTOR REGISTER SUCCESSFULLY");
  
      setLoading(false);
      setDoctorValue(initData);
   
  };
  let data = "doctor"
  if (data === "vv") {
    return router.psuh('/login');;
  }

  if (data !== "admin") {
    return router.push('/admin');
  }
  }
  return (
    <>
      <ToastContainer />

      <div className={style2.container}>
        <Sidebar user="admin" />
        <div className={style2.AfterSideBar}>
          <div className={style.Main_Add_Doctor_div}>
            <h1>Add Doctors</h1>
            <img src="./doctoravatar.png" alt="doctor" className={style.avatarimg} />

            <form className = {style.aa} onSubmit={HandleDoctorSubmit}>
              <div className= {style2.aadiv}>
                <label>Doctor Name</label>
                <div className={style2.inputdiv}>
                  <input className={style.aain}
                    type="text"
                    placeholder="Full Name"
                    name="docName"
                    value={DoctorValue.docName}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={DoctorValue.age}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Emergency Number</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="number"
                    placeholder="Emergency Number"
                    name="mobile"
                    value={DoctorValue.mobile}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    value={DoctorValue.email}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className={style.inputdiv}>
                  <select className={style.aain}
                    name="gender"
                    value={DoctorValue.gender}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Blood Group</label>
                <div className={style.inputdiv}>
                  <select className={style.aain}
                    name="bloodGroup"
                    value={DoctorValue.bloodGroup}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Birthdate</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="date"
                    placeholder="dd-mm-yy"
                    name="DOB"
                    value={DoctorValue.DOB}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className={style.inputdivadressdiv}>
                  <input className={style.aain}
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={DoctorValue.address}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Education</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="text"
                    placeholder="eg.MBBS"
                    name="education"
                    value={DoctorValue.education}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Department</label>
                <div className={style.inputdiv}>
                  <select className={style.aain}
                    name="department"
                    value={DoctorValue.department}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="General">Select</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="ENT">ENT</option>
                    <option value="Ophthalmologist">Ophthalmologist</option>
                    <option value="Anesthesiologist">Anesthesiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Oncologist">Oncologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Password</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={DoctorValue.password}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Other Details</label>
                <div className={style.inputdiv}>
                  <textarea className={style.aain}
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="details"
                    value={DoctorValue.details}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className={style.formsubmitbutton}>
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
