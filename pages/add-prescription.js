import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Remove.module.css'
import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'
import { v4 as uuid } from 'uuid'

const Remove = () => {
    const router = useRouter();

    const [medicine, setmedicine] = useState("");
    const [date, setdate] = useState("");
    const [patient, setpatient] = useState("");
    const [doctor, setdoctor] = useState("");


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
                    <div className={styles.left_item} onClick={() => { router.push('/admin'); }}>
                        admin page
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_row}>
                        Add Prescription
                    </div>

                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="patient id" spellCheck="false"
                            onChange={(e) => { setpatient(e.target.value) }}

                        />
                    </div>

                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="medicine name" spellCheck="false"
                            onChange={(e) => { setmedicine(e.target.value) }}
                        />
                    </div>

                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="date" spellCheck="false"
                            onChange={(e) => { setdate(e.target.value) }}
                        />
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="doctor name" spellCheck="false"
                            onChange={(e) => { setdoctor(e.target.value) }}

                        />
                    </div>
                    <div className={styles.right_row}>
                        <div className={styles.button} onClick={async () => {
                            await executioner(Query.addPrescription(uuid(), patient, medicine, date, doctor), "send");
                            location.reload();
                        }}>
                            Add prescription
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Remove