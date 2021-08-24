import React from 'react'
import AdminDash from "../../components/AdminDash&FancyButton/AdminDash"
import Unauthorized from '../../components/Unauthorized/Unauthorized';
import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';
import Head from 'next/dist/next-server/lib/head';

const AdminPanel = () => {
    const router = useRouter();
    const [userSession, setUserSession] = useState(null)

    useEffect(()=>{
        setUserSession(window.sessionStorage.getItem("userSession"))
    }, [])

    if(userSession){
        return <>
        <Head>
            <title>Admin</title>
        </Head>
        <AdminDash/>
        </>
    }else{
        return <>
        <Head>
            <title>Unauthorized</title>
            <Unauthorized/>
        </Head>
        </>
    }
}

export default AdminPanel
