import Head from 'next/head'
import Image from 'next/image'


import styles from '../styles/Home.module.css'
import {DLogin} from '../pages/login'
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

const Home = ()=> {
 
 

  return (
    <p>"1"</p>
  )
}
export default Home