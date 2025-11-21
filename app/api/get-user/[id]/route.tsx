import { NextResponse } from "next/server";
import returnResponse from "../../utils/returnResponse";
const data = [
  {
    id: 1,
    name: "smit",
  },
  {
    id: 2,
    name: "asdf",
  },
  {
    id: 3,
    name: "agrths",
  },
];
interface paramsType {
  id: String;
}
interface contextType {
  params: paramsType;
}
export async function GET(req: Request, context: contextType) {
  try {
    console.log("req", req);
    console.log("context", context);

    // const id = Number(await context?.params?.id);
    const {id} = await context.params;
    if (!id) return Response.json({ error: "id not found" }, { status: 400 });

    const user = data.find((user) => user?.id === Number(id));
    
    if(!user){
        return returnResponse(404, "No user found")
    }
    return returnResponse(200, "User found", {user: user});
  } catch (error) {}
}
