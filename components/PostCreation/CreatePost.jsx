import dynamic from 'next/dynamic'

var Editor = dynamic(() => import("./Editor"), {
  ssr: false
})


export const CreatePost = ()=>{
    return <>
        <Editor
            endpoint="blog"/>
    </>
}

export default CreatePost;