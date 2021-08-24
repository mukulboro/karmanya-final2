import { FancyButton } from "./FancyButton"
import { useRouter } from "next/dist/client/router";
import styles from "./AdminDash.module.css"
import Head from "next/head"

export const AdminDash = ()=>{
    const router = useRouter();
    const logoutHandle = ()=>{
        window.sessionStorage.removeItem("userSession");
        router.push("/login")
    }

    const portfolioHandle = ()=>{
        router.push("/admin/portfolio")
    }

    const blogHandle = ()=>{
        router.push("/admin/blog")
    }

    return <>
    <Head>
        <title>Admin</title>
    </Head>
    <section className={styles.mainHolder}>
    <div className={styles.leftPanel}>
        <section className={styles.leftPanelContent}>
            <FancyButton
            buttonColor="#05396B"
            dark={true}
            buttonContent="PORTFOLIO"
            buttonFunction={portfolioHandle}/>
        </section>
    </div>
        
    <div className={styles.rightPanel}>
        <section className={styles.rightPanelContent}>
            <FancyButton
            buttonColor="#8BE5AF"
            dark={false}
            buttonContent="BLOG"
            buttonFunction={blogHandle}/>
        </section>
    </div>
    </section>
    <section className={styles.logoutHolder} onClick={logoutHandle}>
        LOGOUT
    </section>
    </>
}

export default AdminDash;