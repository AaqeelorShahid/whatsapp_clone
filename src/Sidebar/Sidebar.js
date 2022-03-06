import React, {useEffect, useState} from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "../SidebarChat/SidebarChat";
import {collection} from 'firebase/firestore';
import {db} from "../firebase";
import { onSnapshot } from "firebase/firestore";

function Sidebar() {

  const [rooms, setRooms] = useState([]);
  const roomCollection = collection(db, "rooms");

  useEffect(() => {
    const unsub = onSnapshot(roomCollection, (data) => {
      setRooms (data.docs.map ((doc) => ({
        ...doc.data(),
        id: doc.id
      })))
    })
  
  }, [])


  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="search contact here" type = "text"/>
        </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat addNewChat/>
          {
            rooms.map ((room) => (
              <SidebarChat key={room.id} id={room.id} name={room.name}/>
            ))
          }
      </div>
    </div>
  );
}

export default Sidebar;
