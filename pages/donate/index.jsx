import React from 'react'
import DonateNow from '../../components/DonateNow/DonateNow'
import Head from 'next/dist/next-server/lib/head';


export const DonateNowPage = () => {
    return <>
    <Head>
        <title>Donate to Karmanya</title>
    </Head>
        <div>
            <DonateNow/>
        </div>
    </>
}

export default DonateNowPage
