import React from 'react'
import dyamic from 'next/dynamic'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/dist/client/router'


var EditPost = dynamic(() => import("../../../components/EditPost/EditPost"), {
  ssr: false
})

const EditBlog = () => {
    const router = useRouter()
    const { id } = router.query;
    return <EditPost endpoint="blog" postID={id}/>
}

export default EditBlog
