import React from 'react';
import userImage from '../assets/images/user.png';
import chatbotImage from '../assets/images/chatbot.png'

function ChatMessage({ message, sender }) {
  return (
    <div>
        {sender === 'chatbot' && (
          <img 
            src={chatbotImage} 
            alt='chatbot' 
            width='50px'
          ></img>
        )}
        {message}
        {sender === 'user' && (
          <img 
            src={userImage} 
            alt='user' 
            width='50px'
          ></img>
        )}
    </div>
  )
}

export default ChatMessage;
