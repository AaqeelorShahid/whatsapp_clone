import { Avatar } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import "./SidebarChat.css";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  const newChat = () => {
    const roomName = prompt("Please enter your name for chat");

    if (roomName) {
      addChat(roomName);
    }
  };

  const addChat = async (roomName) => {
    await addDoc(collection(db, "rooms"), { name: roomName });
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <Link to={`/room/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h3>{name}</h3>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={newChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
