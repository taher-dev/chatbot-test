import React, { useState } from 'react'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'

function App() {

  const [chatMessages, setChatMessages] = useState([]);
  
  return (
    <div className='flex flex-col h-screen p-4 max-w-screen-sm mx-auto'>
      <div className='flex-grow overflow-y-auto'>
        <ChatMessages 
          chatMessages={chatMessages}
        />
      </div>
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App