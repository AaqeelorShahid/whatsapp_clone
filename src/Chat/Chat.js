import { Avatar, Button, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVertOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../firebase";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("")
  const {roomId} = useParams();



  useEffect (() => {
    if(roomId){
      
    }
  }, [roomId])
  // Every time roomId changes this above use effect will get triggered

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
      e.preventDefault(); // To Stop page refereshing
      console.log(input);
      setInput("");
  };

  return (
    <div className="Chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__info">
          <h3>Room name</h3>
          <p>Last seen... </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className="chat__message">
          <span className="chat__name">Shahid</span>
          Hey Guys!!
          <span className="chat__timestamp">9.06 PM</span>
        </div>

        <div className="chat__message chat__reciever">
          <span className="chat__name">Barry</span>
          Hey yo whatsapp!!
          <span className="chat__timestamp">9.07 PM</span>
        </div>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form className="chat__form">
          <input
            value={input}
            onChange = {(e) => setInput(e.target.value)}
            placeholder="Type message here"
            className="chat__inputBox"/>
          <button onClick={sendMessage} type="submit">
            Send message
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
