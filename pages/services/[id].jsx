import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios';
import styles from "../../styles/MainBlog.module.css"
import Head from "next/head"
import ReactHtmlParser from 'react-html-parser';


const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;

    const [blogPost, setBlogPost] = useState(null)

    useEffect(()=>{
        const getData = async ()=>{
            const { data } = await axios.get("https://karmanya.herokuapp.com/blog");
            
            for(let postIndex in data){
                let currentPost = data[postIndex];
                if(currentPost.id === id){
                    setBlogPost(currentPost);
                }
            }            
        }

        getData();
    }, [])
    return <>
    <Head>
        <title>{blogPost ? blogPost.title : "Loading..."}</title>
    </Head>
    <section className={styles.mainHolder}>
        {blogPost ? <MyPost myData={blogPost}/> : <h1>Loading</h1>}
    </section>
    </>
}


const MyPost = ({myData})=>{
    return <>
    <h1 className={styles.blogTitle}>{myData.title}</h1>
    <img src={myData.imageURL} className={styles.blogImage} alt={myData.title} />
    <p className={styles.blogBody}>{ReactHtmlParser(myData.body)}</p>
    </>
}


export default BlogPost
