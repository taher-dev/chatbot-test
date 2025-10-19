import React from 'react';
import userImage from '../assets/images/user.png';
import chatbotImage from '../assets/images/chatbot.png'

function ChatMessage({ message, sender }) {
  return (
    <>
        {sender === 'chatbot' && (
          <img 
            src={chatbotImage} 
            alt='chatbot' 
            className='w-[50px] h-[50px] object-cover'
          ></img>
        )}
        <div className='bg-gray-100 p-3 rounded-lg'>
          {message}
        </div>
        {sender === 'user' && (
          <img 
            src={userImage} 
            alt='user' 
            className='w-[50px] h-[50px] object-cover'
          ></img>
        )}
    </>
  )
}

export default ChatMessage;
