import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import style2 from "../styles/CommonCSS.module.css";
import style from "../styles/AddDoctor.module.css";
const notify = (text) => toast(text);

const Discharge_and_Create_Slip = () => {
  const data  =  ""

  const [loading, setLoading] = useState(false);


  const initmed = {
    medName: "",
    dosage: "",
    duration: "",
  };
  const [med, setmed] = useState(initmed);

  const [medicines, setmedicines] = useState([]);

  const HandleMedChange = (e) => {
    setmed({ ...med, [e.target.name]: e.target.value });
  };

  const InitData = {
    docName: "",
    docDepartment: "",
    patientAge: "",
    docMobile: "",
    patientMobile: "",
    patientBloodGroup: "",
    patientGender: "",
    email: "",
    patientDisease: "",
    patientTemperature: "",
    patientWeight: "",
    patientBP: "",
    patientGlucose: "",
    patientName: "",
    extrainfo: "",
    date: "",
    time: "",
    medicines: [],
  };

  const [ReportValue, setReportValue] = useState(InitData);

  const HandleReportChange = (e) => {
    setReportValue({ ...ReportValue, [e.target.name]: e.target.value });
  };

  const HandleMedAdd = (e) => {
    e.preventDefault();
    setmedicines([...medicines, med]);
    setmed(initmed);
  };

  const HandleReportSubmit = (e) => {
    e.preventDefault();
    let data = {
      ...ReportValue,
      medicines,
    };
    const res = {
      message : "R"
    }
    try {
      setLoading(true);
      
        if (res.message === "R") {
          notify("Report Created Sucessfully");
          setLoading(false);
          setReportValue(InitData);
        } else {
          setLoading(false);
          notify("Something went Wrong");
        }
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <ToastContainer />
      <div className={style2.container}>
        <Sidebar user="doctor" />
        <div className={style2.AfterSideBar}>
          <div className={style.Main_Add_Doctor_div}>
            <h1>Create Report</h1>
            <form>
              <div>
                <label>Doctor Name</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="text"
                    placeholder="Full Name"
                    name="docName"
                    value={ReportValue.docName}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Department</label>
                <div className={style.inputdiv}>
                  <input  className={style.aain}
                
                    type="text"
                    placeholder="Department"
                    name="docDepartment"
                    value={ReportValue.docDepartment}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Doctor Mobile</label>
                <div className={style2.inputdiv}>
                  <input  className={style.aain}
                    type="number"
                    placeholder="No"
                    name="docMobile"
                    value={ReportValue.docMobile}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Patient Name</label>
                <div className={style2.inputdiv}>
                  <input  className={style.aain}
                    type="text"
                    placeholder="Name"
                    name="patientName"
                    value={ReportValue.patientName}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Age</label>
                <div className={style.inputdiv}>
                  <input  className={style.aain}
                    type="number"
                    placeholder="Age"
                    name="patientAge"
                    value={ReportValue.patientAge}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Mobile</label>
                <div className={style.inputdiv}>
                  <input  className={style.aain}
                    type="number"
                    placeholder="Mobile"
                    name="patientMobile"
                    value={ReportValue.patientMobile}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className={style.inputdiv}>
                  <input  className={style.aain}
                    type="email"
                    placeholder="abc@abc"
                    name="email"
                    value={ReportValue.email}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Gender</label>
                <div className={style.inputdiv}>
                  <select className={style.aain}
                    name="patientGender"
                    value={ReportValue.patientGender}
                    onChange={HandleReportChange}
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Patient Blood Group</label>
                <div className={style.inputdiv}>
                  <select className={style.aain}
                    name="patientBloodGroup"
                    value={ReportValue.patientBloodGroup}
                    onChange={HandleReportChange}
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
                <label>Patient Disease</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="text"
                    placeholder="Disease"
                    name="patientDisease"
                    value={ReportValue.patientDisease}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Temperature</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="number"
                    placeholder="99^C"
                    name="patientTemperature"
                    value={ReportValue.patientTemperature}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>

              <div>
                <label>Patient Weight</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="number"
                    placeholder="75 KG"
                    name="patientWeight"
                    value={ReportValue.patientWeight}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Patient BP</label>
                <div className="inputdiv adressdiv">
                  <input className={style.aain}
                    type="number"
                    placeholder="140/90 mmHg"
                    name="patientBP"
                    value={ReportValue.patientBP}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Patient Glucose</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="number"
                    placeholder="99 mg/dL"
                    name="patientGlucose"
                    value={ReportValue.patientGlucose}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Extra Info</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="text"
                    placeholder="Info"
                    name="extrainfo"
                    value={ReportValue.extrainfo}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>
              {/* ******************************************** */}
              <div>
                <label>Medicines</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="text"
                    placeholder="PCM"
                    name="medName"
                    value={med.medName}
                    onChange={HandleMedChange}
                  />
                  <select className={style.aain} name="duration" onChange={HandleMedChange} >
                    <option value="Dosage">Duration</option>
                    <option value="After Meal">After Meal</option>
                    <option value="Before Meal">Before Meal</option>
                  </select>
                  <select className={style.aain} name="dosage" onChange={HandleMedChange}>
                    <option value="Dosage">Dosage</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <input className={style.aain} type="submit" value={"Add"} onClick={HandleMedAdd} />
                </div>
              </div>
              {/* *********************************** */}
              <div>
                <label>Date</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="date"
                    placeholder="dd-mm-yyyy"
                    name="date"
                    value={ReportValue.date}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>
              <div>
                <label>Time</label>
                <div className={style.inputdiv}>
                  <input className={style.aain}
                    type="time"
                    name="time"
                    value={ReportValue.time}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>

              <button
                className={style.formsubmitbutton}
                onClick={HandleReportSubmit}
              >
                {loading ? "Loading..." : "Generate Report"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discharge_and_Create_Slip;
