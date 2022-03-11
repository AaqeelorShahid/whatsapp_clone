import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVertOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { collection, doc, addDoc, getDoc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {db} from "../firebase";
import "./Chat.css";
import { useStatevalue } from "../StateProvider";
import { serverTimestamp } from "firebase/firestore";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("")
  const [messages, setMessages] = useState([])
  const {roomId} = useParams()
  const [{ user }, dispatch] = useStatevalue()

  useEffect (() => {
    if(roomId){ 
      getName(roomId);
      getMessages(roomId);
    }
  }, [roomId])

  const getMessages = async (roomId) => {
      const   messageCollectiom = collection (db, "rooms", `${roomId}`, "messages");
      const unsub = onSnapshot(messageCollectiom, (snapShot) => {
        // setMessages(data.forEach(doc => {
        //   doc.data()
        // }))
        console.log(snapShot)
        setMessages(snapShot.docs.map( (doc) => doc.data() ))
      })

      console.log(messages);

  }

  const getName = async (roomId) => {
    const roomCollection = doc(db, `rooms`, `${roomId}`);
    const data = await getDoc(roomCollection);

    try {
      const roomName = data.data().name;
      setRoomName(roomName);
    } catch (e) {
      console.log(e);
    }
  }

  // Every time roomId changes this above use effect will get triggered
  
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
      e.preventDefault(); // To Stop page refereshing
      console.log(input);
      sendDatabaseMessage()
      setInput("");
  };

  const sendDatabaseMessage = async () => {
    const messageCollection = collection (db, "rooms", `${roomId}`, "messages");
    console.log(messageCollection);
    await addDoc(messageCollection, 
      {
        message: input,
        name: user.displayName,
        time: serverTimestamp()
      })
  }

  return (
    <div className="Chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__info">
          <h3>{roomName}</h3>
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

        {messages.map((msg) => (
                  <div className={`chat__message ${msg.name == user.displayName && 'chat__reciever'}`}>
                  <span className="chat__name">{msg.name}</span>
                  {msg.message}
                  <span className="chat__timestamp">9.06 PM</span>
                </div>
        ))}
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form className="chat__form" onSubmit={sendMessage}>
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
