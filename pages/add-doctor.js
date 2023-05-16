import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Remove.module.css'
import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'
import { v4 as uuid } from 'uuid'

const Remove = () => {
    const router = useRouter();
    const [gender, setGender] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

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
                        Add Doctor
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter doctor name" spellCheck="false"
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter doctor address" spellCheck="false"
                            onChange={(e)=>{setAddresss(e.target.value)}}
                        />
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter doctor age" spellCheck="false"
                            onChange={(e)=>{setAge(e.target.value)}}
                        />
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter doctor gender" spellCheck="false"
                            onChange={(e)=>{setGender(e.target.value)}}
                        />
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter doctor email" spellCheck="false"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter doctor password" spellCheck="false"
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <div className={styles.right_row}>
                        <div className={styles.button} onClick={async () => { 
                            await executioner(Query.createUser(uuid(), name, password, email, age, gender, address, "doctor"), "send");
                            location.reload();
                        }}>
                            Add Doctor
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Remove