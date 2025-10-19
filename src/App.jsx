import React, { useState } from 'react'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'

function App() {

  const [chatMessages, setChatMessages] = useState([{
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
}]);
  
  return (
    <>
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages 
        chatMessages={chatMessages}
      />
    </>
  )
}

export default App