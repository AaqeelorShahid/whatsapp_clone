import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState('');

    const newChat = () => {
        const roomName = prompt("Please enter your name for chat");

        if (roomName){

        }
    }

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));
    }, [])

  return !addNewChat ? (
    <div className="sidebarChat">
        <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
            <h3>Room name</h3>
            <p>Last message...</p>
        </div>
    </div>
  ) : (
      <div className="sidebarChat" onClick={newChat}>
          <h2>Add new Chat</h2>
      </div>
  )
}

export default SidebarChat