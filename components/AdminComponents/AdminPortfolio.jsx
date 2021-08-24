import FancyButton from '../AdminDash&FancyButton/FancyButton'
import TableGenerator from './TableGenerator';
import styles from "./Admin.module.css"
import { useState, useEffect } from 'react';
import Unauthorized from '../Unauthorized/Unauthorized';
import { useRouter } from 'next/dist/client/router';

export const AdminPortfolio = ()=>{
    const router = useRouter()
    const [userSession, setUserSession] = useState(null)

    useEffect(()=>{
        setUserSession(window.sessionStorage.getItem("userSession"))
    }, [])

    if(userSession){
        return <section className={styles.mainHolder}>
        <main className={styles.minorHolder}>
        <FancyButton
            buttonColor="#05396B"
            dark={true}
            buttonContent="ADD NEW"
            buttonFunction={()=>{
                router.push("/create/portfolio")
            }}/>

        <TableGenerator
            endPoint="work" type="portfolio"/>
    </main>
    </section>
    }else{
        return <Unauthorized/>
    }
       
}

export default AdminPortfolio;


