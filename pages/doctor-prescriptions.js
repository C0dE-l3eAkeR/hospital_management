import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Prescription.module.css'
import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'


const Prescription = () => {
    const router = useRouter();

    const prescriptions1 = [
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1234",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1235",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1236",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1237",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1235",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1236",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1237",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1235",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1236",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1237",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1235",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1236",
            date: "11/4/2022",
        },
        {
            medicine_no: "1234",
            medicine_name: "rupadine",
            patient_id: "1237",
            date: "11/4/2022",
        },
    ]

    const [prescriptions, setprescriptions] = useState([]);

    async function run() {
        let res = await executioner(Query.getPrescriptions(), "GET");

        let x = res?.data?.data;
        let result = [];
        let user = JSON.parse(localStorage.getItem('health-user'));

        x.forEach(a => {
            if (a.doctor === user.name) result.push(a);
        });
        setprescriptions(result);
    }

    useEffect(() => {
        run();

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
                        Prescription Lists
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/doctor') }}>
                        Doctor homepage
                    </div>

                </div>
                <div className={styles.right}>

                
                    {
                        prescriptions.map((current, index) =>
                            <div key={index} className={styles.prescription}>
                                <div>{"Medicine Name : " + current.medicine}</div>
                                <div>{"Patient ID : " + current.patient_id}</div>
                                <div>{"Date : " + current.date}</div>
                                <div>{"Doctor : " + current.doctor}</div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Prescription