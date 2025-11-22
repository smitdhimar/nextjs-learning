import { getTimeStamp } from "@/utils/getServerTimeStamp"

const page = async () => {
    const serverTimeStamp = await getTimeStamp(); 
    console.log('serverTimeStamp', serverTimeStamp)
  return (
    <div>
        hello
    </div>
  )
}   

export default page
