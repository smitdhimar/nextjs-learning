export async function GET(){
    const url = process.env.SOCKET_SERVER_BASE_URL

    return Response.json({
        socketUrl: url
    })
}