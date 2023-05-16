import React, { useEffect, useState } from "react";

import { BiTime } from "react-icons/bi";
import { GiMeditation } from "react-icons/gi";
import { AiFillCalendar, AiFillEdit } from "react-icons/ai";
import { MdBloodtype } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsHouseFill, BsGenderAmbiguous } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaRegHospital, FaMapMarkedAlt, FaBirthdayCake } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { Button, message, Modal } from "antd";
import axios from "axios";
import style2 from "../styles/CommonCSS.module.css";
import style from "../styles/Doctor_Profile.module.css";

// *********************************************************



const Patient2 = () => {
 
  const [id, setId] = useState("");
 

  useEffect(()=>{
    console.log("print11")
   
    axios.get('http://localhost:4000/id').then((res)=>{
      console.log(res.data)
    setId(res.data.info)
    let link = 'http://localhost:4000/patient/'+res.data.info
   axios.get(link).then((res)=>{
     console.log(res.data)
    setData(res.data)
   })
    
  })},[])
  

const user = "nurse";
//data base load info of id

const [ data, setData] = useState({
  image : "./doctoravatar",
  patientName : "",
  age : "",
  gender : "",
  bloodGroup :"" ,
  mobile : "",
  DOB : "",
  address :"" ,
}
);



  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.success(text);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    docName: data.patientName,
    age: data.age,
    gender: data.gender,
    bloodGroup: data.ubloodGroup,
    mobile: data.mobile,
    DOB: data.DOB,
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    disptach(UpdateDoctor(formData, data.user._id));
    success("user updated");
    handleOk();
  };

  useEffect(()=>{

    console.log(id)
   
   },[])

  return (
    <>
      {contextHolder}
     
      <div className={style2.container}>
      <Sidebar user={user}/>
        <div className={style2.AfterSideBar}>
          <div className={style.maindoctorProfile}>
            <div className={style.firstBox}>
              <div>
                <img src="./doctoravatar.png" alt="docimg" />
              </div>
              <hr />
              <div className={style.singleitemdiv}>
                <GiMeditation className={style.singledivicons} />
                <p>{data?.patientName}</p>
              </div>
              <div className={style.singleitemdiv}>
                <MdBloodtype className={style.singledivicons} />
                <p>{data?.bloodGroup}</p>
              </div>
              <div className={style.singleitemdiv}>
                <FaBirthdayCake className={style.singledivicons} />
                <p>{data?.DOB}</p>
              </div>
              <div className={style.singleitemdiv}>
                <BsFillTelephoneFill className={style.singledivicons} />
                <p>{data?.mobile}</p>
              </div>
              <div className={style.singleitemdiv}>
                <button onClick={showModal}>
                  {" "}
                  <AiFillEdit />
                  Edit profile
                </button>
              </div>

              <Modal
                title="Edit details"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button key="submit" onClick={handleFormSubmit}>
                    Edit
                  </Button>,
                ]}
              >
                <form className={style.inputForm}>
                  <input
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Full name"
                  />
                  <input
                    name="age"
                    value={formData.age}
                    onChange={handleFormChange}
                    type="number"
                    placeholder="Age"
                  />
                  <select name="gender" onChange={handleFormChange}>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Others</option>
                  </select>
                  <input
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Blood Group"
                  />
                  <input
                    name="education"
                    value={formData.education}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="education"
                  />
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleFormChange}
                    type="number"
                    placeholder="mobile"
                  />
                  <input
                    name="DOB"
                    value={formData.DOB}
                    onChange={handleFormChange}
                    type="date"
                    placeholder="Date of birth"
                  />
                </form>
              </Modal>
            </div>
            {/* ***********  Second Div ******************** */}
            <div className={style.SecondBox}>
              <div className={style.subfirstbox}>
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  Other Info
                </h2>
                <div className={style.singleitemdiv}>
                  <BsGenderAmbiguous className={style.singledivicons} />
                  <p>{data?.gender}</p>
                </div>
                <div className={style.singleitemdiv}>
                  <AiFillCalendar className={style.singledivicons} />
                  <p>{data?.age}</p>
                </div>

                <div className={style.singleitemdiv}>
                  <MdOutlineCastForEducation className={style.singledivicons} />
                  <p>{data?.education}</p>
                </div>
                <div className={style.singleitemdiv}>
                  <BsHouseFill className={style.singledivicons} />
                  <p>{data?.address}</p>
                </div>
              </div>
              {/* ***********  Third Div ******************** */}
              <div className="subSecondBox">
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  Hospital Details
                </h2>
                <div className={style.singleitemdiv}>
                  <BiTime className={style.singledivicons} />
                  <p>09:00 AM - 20:00 PM (TIMING)</p>
                </div>
                <div className={style.singleitemdiv}>
                  <FaRegHospital className={style.singledivicons} />
                  <p>Apollo hospitals</p>
                </div>
                <div className={style.singleitemdiv}>
                  <FaMapMarkedAlt className={style.singledivicons} />
                  <p>
                    Dhaka, Bangladesh
                  </p>
                  
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
      
    </>
    
  );
  
};

export default Patient2;
