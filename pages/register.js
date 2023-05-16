import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Register.module.css'
import {v4 as uuid} from 'uuid'
import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'
const Register = () => {
    const router = useRouter();

    const TYPE =
    {
        DOCTOR: 'Doctor Registration',
        ADMIN: 'Admin Registration',
        PATIENT: 'Patient Registration',
    }
    const GENDER =
    {
        MALE: 'male',
        FEMALE: 'female',
    }

    const [type, setType] = useState(TYPE.ADMIN);
    const [gender, setGender] = useState(GENDER.MALE);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    function getType()
    {
        if(type === TYPE.DOCTOR) return "doctor";
        if(type === TYPE.ADMIN) return "admin";
        if(type === TYPE.PATIENT) return "patient";
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.nav_left}>
                    hospital management system
                </div>
                <div className={styles.nav_right}>

                    <div className={styles.nav_right_link}>
                        home
                    </div>
                    <div className={styles.nav_right_link}>
                        about us
                    </div>
                    <div className={styles.nav_right_link}>
                        contact
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.box_left}>
                    <div className={styles.image}>
                        <img src='/logo.jpg' />
                    </div>
                    <div className={styles.prompt}>
                        <p>
                            hospital management system
                        </p>
                        <p>
                            Stay safe, stay healthy
                        </p>
                    </div>
                </div>
                <div className={styles.box_right}>
                    <div className={styles.box_right_top}>
                        <div onClick={() => { setType(TYPE.PATIENT) }}
                            className={(type !== TYPE.PATIENT) ? styles.box_right_top_item : styles.box_right_top_selected}>
                            patient
                        </div>
                        <div onClick={() => { setType(TYPE.ADMIN) }}
                            className={(type !== TYPE.ADMIN) ? styles.box_right_top_item : styles.box_right_top_selected}>
                            admin
                        </div>
                        <div onClick={() => { setType(TYPE.DOCTOR) }}
                            className={(type !== TYPE.DOCTOR) ? styles.box_right_top_item : styles.box_right_top_selected}>
                            doctor
                        </div>
                    </div>
                    <div className={styles.box_right_title}>
                        {type}
                    </div>

                    <div className={styles.box_right_inputs}>
                        <input type="text"
                            placeholder="user name" spellCheck="false"
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                        <input type="text"
                            placeholder="email" spellCheck="false"
                            onChange={(e)=>{setEmail(e.target.value)}}

                        />
                    </div>

                    <div className={styles.box_right_inputs}>
                        <input type="text"
                            placeholder="age" spellCheck="false"
                            onChange={(e)=>{setAge(e.target.value)}}

                        />
                        <input type="text" value={"Gender : " + gender}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                if (gender === GENDER.FEMALE) setGender(GENDER.MALE);
                                else setGender(GENDER.FEMALE)
                            }}
                            spellCheck="false"
                        />
                        <input type="text"
                            placeholder="address" spellCheck="false"
                            onChange={(e)=>{setAddress(e.target.value)}}

                        />
                    </div>

                    <div className={styles.box_right_inputs}>

                        <input type="password"
                            placeholder="password" spellCheck="false"
                            autoComplete="new-password"
                            onChange={(e)=>{setPassword(e.target.value)}}

                        />
                        <input type="password"
                            placeholder="confirm password" spellCheck="false"
                            autoComplete="new-password"
                            onChange={(e)=>{setCPassword(e.target.value)}}
                        />
                    </div>

                    <div className={styles.button_box}>
                        <div className={styles.button} onClick={async () => { 
                            if(password !== cpassword) return;
                            await executioner(Query.createUser(uuid(), name, password, email, age, gender, address, getType()), "send");
                            router.push('/login') }}>
                            Register
                        </div>
                    </div>
                    <div className={styles.link_box}>

                        <div className={styles.link_prompt}>
                            Aleady have an account?
                        </div>
                        <div className={styles.link} onClick={() => { router.push('/login') }}>
                            Log In
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register