import { useState, useEffect } from "react"
import axios from 'axios';
import styles from "./Admin.module.css"
import { useRouter } from "next/dist/client/router";

export const TableGenerator = ({endPoint, type})=>{
    const router = useRouter();
    const [postData, setPostData] = useState(null)
    const [loading, setLoading] = useState(true)

    const apiURL = `https://karmanya.herokuapp.com/${endPoint}`

    const deletePost = async (id)=>{
        const deleteURL = `https://karmanya.herokuapp.com/${endPoint}?workID=${id}&postID=${id}`
        await axios.delete(deleteURL, {workID: id, postID: id})
        window.location.reload()
    }

    const editThePost = (postID)=>{
        router.push(`/edit/${type}/${postID}`)
    }

     useEffect(()=>{
        const getData = async ()=>{
            const {data} = await axios.get(apiURL);
            setPostData(data.reverse());
            setLoading(false);
        }
        getData();
    },[])

    if(loading){
        return <h1 className="loading">Loading</h1>
    }else{
        return <table className={styles.table}>
        <thead>
            <tr className={styles.tr}>
                <th className={styles.th}>Post Name</th>
                <th className={styles.th}>Post Date</th>
                <th className={styles.th}></th>
                <th className={styles.th}></th>
            </tr>
        </thead>
        <tbody>
            {
                postData.map((post)=>{
                    var postDate = new Date(Number(post.id))
                    return <tr key={post.id} className={styles.tr}>
                        <td className={styles.td}>{post.title}</td>
                        <td className={styles.td}>{`${postDate.getFullYear()}/${postDate.getMonth()}/${postDate.getDay()}`}</td>
                        <td className={styles.td}><section className="actionButton" className={styles.edit} onClick={()=>{editThePost(post.id)}}>Edit</section></td>
                        <td className={styles.td}><section className="actionButton" className={styles.delete} onClick={()=>{deletePost(post.id)}}>Delete</section></td>
                    </tr>
                })
            }
        </tbody>
    </table>
    }
}




export default TableGenerator;