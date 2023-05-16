import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Admin.module.css'

const Admin = () => {
    const router = useRouter();
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
                    <div className={styles.left_item} onClick={() => { router.push('/doctors') }}>
                        doctor lists
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/patients') }}>
                        patients lists
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/appointments') }}>
                        Appointment lists
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/prescription-list') }}>
                        Prescription lists
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/add-doctor') }}>
                        Add doctor
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/remove-doctor') }}>
                        Remove doctor
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/add-prescription') }}>
                        Add Prescription
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/book-appointment'); }}>
                        book appointment
                    </div>

                </div>
                <div className={styles.right}>
                    <div className={styles.right_row}>
                        Welcome Admin
                    </div>
                    <div className={styles.right_row}>
                        <div className={styles.item} onClick={() => { router.push('/doctors') }}>
                            doctor lists
                        </div>
                        <div className={styles.item} onClick={() => { router.push('/add-prescription') }}>
                            add prescription
                        </div>

                        <div className={styles.item} onClick={() => { router.push('/patients') }}>
                            patients lists
                        </div>
                    </div>
                    <div className={styles.right_row}>
                        <div className={styles.item} onClick={() => { router.push('/add-doctor') }}>
                            Add doctor
                        </div>
                        <div className={styles.item} onClick={() => { router.push('/prescription-list') }}>
                            Prescription lists
                        </div>


                        <div className={styles.item} onClick={() => { router.push('/remove-doctor') }}>
                            Remove doctor
                        </div>
                    </div>

                    <div className={styles.right_row}>

                        <div className={styles.item} onClick={() => { router.push('/appointments') }}>
                            Appointment lists
                        </div>
                        <div className={styles.item} onClick={() => { router.push('/book-appointment'); }}>
                            book appointment
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin