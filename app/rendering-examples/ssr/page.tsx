import { getPosts } from "@/lib/api/jsonPlaceHolderSource";

export async function getServerSideProps() {
    const data = getPosts();
    console.log(data)
    return {
        props: { dummyData: "dummy value"}
    }
}
interface ssrPropsData{
    dummyData: String
}
export default function SSR(props: ssrPropsData){
    console.log(props)
    return (<>
        <div>
            <h1>SSR</h1>
            <p>Data: {}</p>
        </div>
    </>)
}