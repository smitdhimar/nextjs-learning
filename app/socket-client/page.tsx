"use client";

import io from "socket.io-client";
import { useState, useEffect } from "react";

export default function Home() {
  const [num, setNum] = useState(undefined);

  useEffect(() => {
    const connectToSocket = async()=>{

      try {
        const response = await fetch('api/socket-url')
        const result = await response.json();
        console.log(result)
        if(!result?.socketUrl) {
          console.log("No socket url found");
          throw new Error("No socket url found")
        }
        // debugger
        const socket = io(result.socketUrl, {
          reconnection: false
        });
    
        socket.on("connect", () => {
          console.log("CLIENT CONNECTED:", socket.id);
    
        });
    
        socket.on("number", (value) => {
          console.log("RECEIVED NUMBER:", value);
          setNum(value);
        });
    
        socket.on("connect_error", (err) => {
          console.log("CONNECT ERROR:", err.message);
          setNum(undefined)
        });
        return () => {
          socket.disconnect();
        };
      } catch (error: any) {
        console.log("There is some error connecting to server: ", error?.message)
      }
    }
    connectToSocket();
  }, []);

  return (
    <div>
      {num !== undefined
        ? `Server sent ${num}`
        : `No number was sent yet`}
    </div>
  );
}
