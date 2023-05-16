import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Admin.module.css'

const Doctor = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect(() => {
        let x = JSON.parse(localStorage.getItem('health-user'));
        setUser(x);
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.nav_left}>
                    hospital management system
                </div>
                <div className={styles.nav_right} onClick={() => { router.push('/login') }}>
                    logout
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.left_item_dash}>
                        Dashboard
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/doctor-appointments') }}>
                        appointments
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/doctor-prescriptions') }}>
                        prescriptions
                    </div>


                </div>
                <div className={styles.right}>
                    <div className={styles.right_row}>
                    {
                            "Welcome Dr. " + user?.name
                        }
                    </div>
                    <div className={styles.right_row}>
                    </div>
                    <div className={styles.right_row}>
                        <div className={styles.item} onClick={() => { router.push('/doctor-appointments') }}>
                            Appointment lists
                        </div>
                        <div className={styles.item} onClick={() => { router.push('/doctor-prescriptions') }}>
                            Prescription lists
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor