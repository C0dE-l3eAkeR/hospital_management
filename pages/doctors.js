import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Prescription.module.css'
import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'


const Doctors = () => {
    const router = useRouter();

    const doctors1 = [
        {
            doctor_id: "1234",
            name: "Dr. abid hossain",
            email: "1234",
            address: "11/4/2022",
            age: "31",
            gender: "male"
        },
        {
            doctor_id: "1234",
            name: "Dr. abid hossain",
            email: "1234",
            address: "11/4/2022",
            age: "31",
            gender: "male"
        },
        {
            doctor_id: "1234",
            name: "Dr. abid hossain",
            email: "1234",
            address: "11/4/2022",
            age: "31",
            gender: "male"
        },
        {
            doctor_id: "1234",
            name: "Dr. abid hossain",
            email: "1234",
            address: "11/4/2022",
            age: "31",
            gender: "male"
        },
        {
            doctor_id: "1234",
            name: "Dr. abid hossain",
            email: "1234",
            address: "11/4/2022",
            age: "31",
            gender: "male"
        },
        {
            doctor_id: "1234",
            name: "Dr. abid hossain",
            email: "1234",
            address: "11/4/2022",
            age: "31",
            gender: "male"
        },
        {
            doctor_id: "1234",
            name: "Dr. abid hossain",
            email: "1234",
            address: "11/4/2022",
            age: "31",
            gender: "male"
        },
        {
            doctor_id: "1234",
            name: "Dr. abid hossain",
            email: "1234",
            address: "11/4/2022",
            age: "31",
            gender: "male"
        },
        {
            doctor_id: "1234",
            name: "Dr. abid hossain",
            email: "1234",
            address: "11/4/2022",
            age: "31",
            gender: "male"
        },

    ]
    const [doctors, setdoctors] = useState([]);

    async function run()
    {
        let res = await executioner(Query.getDoctors(), "GET");
        setdoctors(res?.data?.data);
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
                        Doctor List
                    </div>
                    <div className={styles.left_item} onClick={() => { router.push('/admin') }}>
                        Admin homepage
                    </div>

                </div>
                <div className={styles.right}>

                    {
                        doctors.map((current, index) =>
                            <div key={index} className={styles.prescription}>
                                <div>{"Doctor ID No : " + current.id}</div>
                                <div>{"Doctor Name : " + current.name}</div>
                                <div>{"Age : " + current.age}</div>
                                <div>{"Address : " + current.address}</div>
                                <div>{"Email : " + current.email}</div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Doctors