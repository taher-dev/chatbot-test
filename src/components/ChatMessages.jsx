import React from 'react'
import { useState } from 'react'
import ChatMessage from './ChatMessage'

function ChatMessages({ chatMessages }) {


  return (
    <>
        {chatMessages.map((chatMessage) => {
            return(
            <div className={
              chatMessage.sender === 'user' 
              ? 'flex justify-end mb-4 gap-2' 
              : 'flex justify-start mb-4 gap-2'
            }>
              <ChatMessage 
                  message={chatMessage.message}
                  sender={chatMessage.sender} 
                  key={chatMessage.id}
              />
            </div>
            )
        })} 
    </>
  )
}

export default ChatMessages