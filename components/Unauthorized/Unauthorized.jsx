import React from 'react'
import styles from "./Unauthorized.module.css"
import Link from 'next/dist/client/link'

const Unauthorized = () => {
    return (
        <div className={styles.mainHolder}>
            <h1>Unauthorized</h1>
            <p>Please <Link href="/login">login</Link> to proceed.</p>
        </div>
    )
}

export default Unauthorized
