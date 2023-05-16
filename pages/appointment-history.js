import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Prescription.module.css'
import Query from '../Backend/Queries'
import executioner from '../Backend/executioner'

const Appointment_history = () => {
    const router = useRouter();

    const Appointments = [
        {
            date: "12/11/22",
            time: "12:03",
            format: "AM",
            room: "101B",
            doctor: "Dr. Morshed Alam",
            patient_id: "1234",
        },
        {
            date: "12/11/22",
            time: "12:03",
            format: "AM",
            room: "101B",
            doctor: "Dr. Morshed Alam",
            patient_id: "1234",
        },
        {
            date: "12/11/22",
            time: "12:03",
            format: "AM",
            room: "101B",
            doctor: "Dr. Morshed Alam",
            patient_id: "1234",
        },
        {
            date: "12/11/22",
            time: "12:03",
            format: "AM",
            room: "101B",
            doctor: "Dr. Morshed Alam",
            patient_id: "1234",
        },
        {
            date: "12/11/22",
            time: "12:03",
            format: "AM",
            room: "101B",
            doctor: "Dr. Morshed Alam",
            patient_id: "1234",
        },
        {
            date: "12/11/22",
            time: "12:03",
            format: "AM",
            room: "101B",
            doctor: "Dr. Morshed Alam",
            patient_id: "1234",
        },
        {
            date: "12/11/22",
            time: "12:03",
            format: "AM",
            room: "101B",
            doctor: "Dr. Morshed Alam",
            patient_id: "1234",
        },
        {
            date: "12/11/22",
            time: "12:03",
            format: "AM",
            room: "101B",
            doctor: "Dr. Morshed Alam",
            patient_id: "1234",
        },

    ]


    const [appointments, setappointments] = useState([]);

    async function run() {
        let res = await executioner(Query.getAppointments(), "GET");
        let x = res?.data?.data;
        let result = [];
        let user = JSON.parse(localStorage.getItem('health-user'));

        x.forEach(a => {
            if (a.patient_id === user.id) result.push(a);
        });
        setappointments(result);
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
                        Appointment history
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/patient') }}>
                        Patient homepage
                    </div>

                </div>


                <div className={styles.right}>

                    {
                        appointments.map((current, index) =>
                            <div key={index} className={styles.prescription}>
                                <div>{"Doctor : " + current.name}</div>
                                <div>{"Patient ID : " + current.patient_id}</div>
                                <div>{"Room no : " + current.room}</div>
                                <div>{"Date : " + current.date}</div>
                                <div>{"Time : " + current.time}</div>
                                <div style={{
                                    margin: "auto",
                                    width: "max-content",
                                    padding: "10px",
                                    marginTop: "20px",
                                    backgroundColor: "#00000080",
                                    cursor: "pointer",
                                }}
                                onClick={async ()=>{
                                    await executioner(Query.delteAppointment(current.id), "PUT");
                                    location.reload();
                                }}
                                >{"delete appointment"}</div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Appointment_history