import { NextResponse } from "next/server"
const returnResponse = async (statusCode: number, message: String, data?: any) =>{
    return Response.json({
        message,
        data
    }, 
    {
        status: statusCode
    }
    )
}

export default returnResponse