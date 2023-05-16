import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Login.module.css'
const Contact = () => {

    const router = useRouter();


    const TYPE =
    {
        DOCTOR: 'Doctor Portal',
        ADMIN: 'Admin Portal',
        PATIENT: 'Patient Portal',
    }
    const [type, setType] = useState(TYPE.ADMIN)
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
                        This is a hospital management system
                    </div>
                    <div className={styles.link_box} style={{flexDirection: "column", fontSize: "large"}}>
                        <div>
                            This site has the features implemented to connect
                        </div>
                        
                        <div>
                            and co-ordinate patients, doctors and administrators.
                        </div>
                    </div>



                </div>
            </div>
        </div >
    )
}

export default Contact