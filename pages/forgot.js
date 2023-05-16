import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Login.module.css'
import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'
import { v4 as uuid } from 'uuid'

const Login = () => {

    const router = useRouter();
    const [WrongPassword, setWrongPassword] = useState(false);
    const [ForgotPassword, setForgotPassword] = useState(false);
    const TYPE =
    {
        DOCTOR: 'Doctor Portal',
        ADMIN: 'Admin Portal',
        PATIENT: 'Patient Portal',
    }
    const [type, setType] = useState(TYPE.ADMIN);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.nav_left}>
                    hospital management system
                </div>
                <div className={styles.nav_right}>

                    <div className={styles.nav_right_link} onClick={() => { router.push('/login') }}>
                        home
                    </div>
                    <div className={styles.nav_right_link} onClick={() => { router.push('/about') }}>
                        about us
                    </div>
                    <div className={styles.nav_right_link} onClick={() => { router.push('/contact') }}>
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

                    <div className={styles.box_right_title}>
                        {"Forgot password"}
                    </div>
                    <div className={styles.box_right_inputs}>
                        <input type="text"
                            placeholder="user email" spellCheck="false"
                            onChange={(e) => { setName(e.target.value); setWrongPassword(false)}}
                        />

                    </div>
                    {
                        name.length !== 0 && WrongPassword &&
                        <div className={styles.box_right_inputs}>
                            <p>The recovery password has been sent</p>
                        </div>
                    }
                    <div className={styles.button_box}>
                        <div className={styles.button} onClick={async () => {
                            setWrongPassword(true);
                        }}>
                            send email
                        </div>
                    </div>
                
                    <div className={styles.link_box}>

                        <div className={styles.link_prompt}>
                            Remember your password?
                        </div>
                        <div className={styles.link} onClick={() => { router.push('/login') }}>
                            Log in
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login