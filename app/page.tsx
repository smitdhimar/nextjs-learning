"use client";

import io from "socket.io-client";
import { useState, useEffect } from "react";

export default function Home() {
  const [num, setNum] = useState(undefined);

  useEffect(() => {
    const socket = io("http://localhost:4000", {
      autoConnect: false
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
  }, []);

  return (
    <div>
      {num !== undefined
        ? `Server sent ${num}`
        : `No number was sent yet`}
    </div>
  );
}
