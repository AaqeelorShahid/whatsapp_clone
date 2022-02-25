import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVertOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chat() {
    const[seed, setSeed] = useState("")
     
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
     }, [])

  return (
    <div className="Chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__info">
          <h3>Room name</h3>
          <p>Last seen...  </p>
        </div>

        <div className="chat__headerRight">
            <IconButton>
                <SearchOutlined/>
            </IconButton>

            <IconButton>
                <AttachFile/>
            </IconButton>

            <IconButton>
                <MoreVertOutlined/>
            </IconButton>
        </div>
      </div>
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
