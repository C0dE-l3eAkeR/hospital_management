import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Remove.module.css'
import executioner from '../Backend/executioner'
import Query from '../Backend/Queries'

const Remove = () => {
    const [id, setid] = useState("");
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
                    <div className={styles.left_item} onClick={() => { router.push('/admin'); }}>
                        admin page
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_row}>
                        Remove Doctor
                    </div>
                    <div className={styles.right_row}>
                    </div>
                    <div className={styles.right_row}>
                        <input type="text"
                            placeholder="enter doctor id to delete" spellCheck="false"
                            onChange={(e) => { setid(e.target.value) }}
                        />
                    </div>
                    <div className={styles.right_row}>
                        <div className={styles.button} onClick={async () => {
                            await executioner(Query.removeDoctor(id), "send");
                            location.reload();
                        }}>
                            Remove
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Remove