import React from 'react'
import { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import MyEditor from 'ckeditor5-custom-build/build/ckeditor';
import axios from "axios";
import qs from 'qs'
import styles from "./EditPost.module.css"

const editorConfiguration = {
    toolbar: ['heading', "|" , 'bold', 'italic', 'underline' , 'alignment', 'link', "|" ,'undo', 'redo', 'numberedList', 'bulletedList', "|" , 'blockQuote' , 'insertTable' ]
};


const EditPost = ({ postID, endpoint }) => {

    const apiURL = "https://karmanya.herokuapp.com"
    const [postBody, setPostBody] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postImage, setPostImage] = useState("");

    useEffect(()=>{
        const getData = async ()=>{
            const { data } = await axios.get(`${apiURL}/${endpoint}`)
            data.forEach((post)=>{
                if(post.id === postID){
                    setPostTitle(post.title);
                    setPostBody(post.body);
                    setPostImage(post.imageURL)
                }
            })
        }

        getData();
    }, [])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let { data } = await axios.patch(`${apiURL}/${endpoint}`,  qs.stringify({postID: postID, workID: postID, newTitle: postTitle, newBody: postBody, newImageURL: postImage}))
        if(data.success){
            alert("Post Updated")
        }else{
            alert("There was an error")
        }
    }
    return <>
        <div className={styles.holder}>
        <h1 className={styles.title}>Create New Post</h1>
        <form onSubmit={handleSubmit}>
            <input className={styles.input} type="text" placeholder="Post Title" value={postTitle} onChange={(e)=>setPostTitle(e.target.value)} required/>
            <input className={styles.input} type="text" placeholder="Image Link" value={postImage} onChange={(e)=>setPostImage(e.target.value)} required/>
            
             <section id="textbox">
                <CKEditor
                editor={ MyEditor }
                config={ editorConfiguration }
                data= {postBody}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setPostBody(data)
                    } }
                
                />
            </section>

            <button className={styles.submit}>
                SUBMIT
            </button>
        </form>
    </div>
    </>
}

export default EditPost
