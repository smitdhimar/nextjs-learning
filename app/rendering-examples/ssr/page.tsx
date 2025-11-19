import { getPosts } from "@/lib/api/jsonPlaceHolderSource";

interface ssrPropsData{
    dummyData: String
}
export default function SSR(props: ssrPropsData){
    // const data = 
    console.log(props)
    return (<>
        <div>
            <h1>SSR</h1>
            <p>Data: asdf</p>
        </div>
    </>)
}