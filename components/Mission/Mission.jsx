import React from 'react'
import styles from "./Mission.module.css"
import axios from 'axios'
import { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser';


const Mission = ({ data }) => {

    const [work, setWork] = useState(null)

    useState(()=>{
        const getData = async ()=>{
            const { data } = await axios.get('https://karmanya.herokuapp.com/work');
            setWork(data)
        }

        getData();
    }, [])
    
    console.log(data);
    return <>
    <h1 className={styles.h1}>Our Mission</h1>
    <p className={styles.description}>
        Karmanya Foundation was founded on the belief that everyone deserves a good life. Through our various programs and activities, 
        we ensure the well-being of several people. We mostly work with underpriviledged children and their mothers. <br /> Furthermore, Karmanya 
        Foundation also works to ensure that the youth of the nation is politically aware and independent. We have conducted a plethora of 
        different programs and activities to raise donations and to make our goal a reality.
    </p>

    <h1 className={styles.h1}>Our Works</h1>
    { work? <WorkList works={work}/> : <h1 className={styles.loading}>Loading....</h1> }
    </>
}


const WorkList = ({ works })=>{
    return <section className={styles.work}>
        {
            works.map((work)=>{
                return <section key={work.id} className={styles.workCard}>
                <h2 className={styles.workTitle}>{work.title}</h2>
                <img src={work.imageURL} className={styles.workImg} alt={work.title} />
                <p className={styles.workBody}>{ ReactHtmlParser(work.body) }</p>
                </section>
            })
        }
    </section>
}

export default Mission
