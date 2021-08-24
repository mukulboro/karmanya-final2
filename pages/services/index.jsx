import React from 'react'
import MainBlogPage from "../../components/MainBlogPage/MainBlogPage"
import Head from 'next/dist/next-server/lib/head';


const Blog = () => {
    return <>
    <Head>
        <title>
            Our Services
        </title>
    </Head>
        <MainBlogPage/>
    </>
}

export default Blog
