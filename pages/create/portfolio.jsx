import React from 'react'
import { useState, useEffect } from 'react'
import Unauthorized from '../../components/Unauthorized/Unauthorized'
import { CreateWork } from "../../components/PostCreation/CreateWork"
import Head from 'next/dist/next-server/lib/head';


const CreateNewWorkPost = () => {
    const [userSession, setUserSession] = useState(null)

    useEffect(()=>{
        setUserSession(window.sessionStorage.getItem("userSession"))
    }, [])

    if(userSession){
        return <>
        <Head>
            <title>Create Work</title>
        </Head>

        <CreateWork/>
        </>
    }else{
        return <>
        <Head>
            <title>Unauthorized</title>
        </Head>
        <Unauthorized/>
        </>
    }
}

export default CreateNewWorkPost
