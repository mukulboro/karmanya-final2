import dynamic from 'next/dynamic'

var Editor = dynamic(() => import("./Editor"), {
  ssr: false
})


export const CreateWork = ()=>{
    return <>
        <Editor
            endpoint="work"/>
    </>
}

export default CreateWork;