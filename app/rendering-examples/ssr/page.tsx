"use client";
import { getPosts } from "@/lib/api/jsonPlaceHolderSource";

function SSR() {
  // const data = await getPosts();
  // console.log(data)
  console.log("asdf");
  return (
    <>
      <div>
        <h1>SSR</h1>
        <p>Data: asdf</p>
      </div>
    </>
  );
}
export default SSR;
