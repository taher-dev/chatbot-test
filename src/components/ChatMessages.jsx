import React from 'react'
import ChatMessage from './ChatMessage'

function ChatMessages() {
    const chatMessages = [{
            message: 'hello chatbot',
            sender: 'user',
            id: crypto.randomUUID()
        }, {
            message: 'Hello! How can I help you?',
            sender: 'chatbot',
            id: crypto.randomUUID()
        }, {
            message: 'hello chatbot',
            sender: 'user',
            id: crypto.randomUUID()
        }, {
            message: 'Hello! How can I help you?',
            sender: 'chatbot',
            id: crypto.randomUUID()
    }]
  return (
    <>
        {chatMessages.map((chatMessage) => {
            return(
            <ChatMessage 
                message={chatMessage.message} 
                sender={chatMessage.sender} 
                key={chatMessage.id}
            />
            )
        })} 
    </>
  )
}

export default ChatMessages