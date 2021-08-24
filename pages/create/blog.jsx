import React from 'react'
import { CreatePost } from "../../components/PostCreation/CreatePost"
import { useState, useEffect } from 'react'
import Unauthorized from '../../components/Unauthorized/Unauthorized'
import Head from 'next/dist/next-server/lib/head';

const CreateNewBlogPost = () => {
   const [userSession, setUserSession] = useState(null)

    useEffect(()=>{
        setUserSession(window.sessionStorage.getItem("userSession"))
    }, [])

    if(userSession){
        return <>
        <Head>
            <title>Create Blog Post</title>
        </Head>

        <CreatePost/>
        </>
    }else{
        return <>
        <Head>
            <title>Create Blog Post</title>
        </Head>
        <Unauthorized/>
        </>
    }
}

export default CreateNewBlogPost
