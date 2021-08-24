import FancyButton from '../AdminDash&FancyButton/FancyButton'
import TableGenerator from './TableGenerator';
import styles from "./Admin.module.css"
import { useState, useEffect } from 'react';
import Unauthorized from '../Unauthorized/Unauthorized';
import { useRouter } from 'next/dist/client/router';

export const AdminBlog = ()=>{
    const router = useRouter()
    const [userSession, setUserSession] = useState(null)

    useEffect(()=>{
        setUserSession(window.sessionStorage.getItem("userSession"))
    }, [])

    if(userSession){
        return <section className={styles.mainHolder}>
        <main className={styles.minorHolder}>
        <FancyButton
            buttonColor="#8BE5AF"
            dark={false}
            buttonContent="ADD NEW"
            buttonFunction={()=>{
                router.push("/create/blog")
            }}/>

        <TableGenerator
            endPoint="blog" type="blog"/>
    </main>
    </section>
    }else{
        return <Unauthorized/>
    }
       
}

export default AdminBlog;