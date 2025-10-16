import React from 'react'

function ChatInput() {
  return (
    <>
        <input
            placeholder='Send a message to chatbot'
            size={30}
        ></input>

        <button>Send</button>
    </>
  )
}

export default ChatInput