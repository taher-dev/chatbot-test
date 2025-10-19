import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

function ChatMessages({ chatMessages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <>
      {chatMessages.map((chatMessage) => {
        return (
          <div
            className={
              chatMessage.sender === 'user'
                ? 'flex justify-end mb-4 gap-2'
                : 'flex justify-start mb-4 gap-2'
            }
            key={chatMessage.id}
          >
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
            />
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </>
  );
}

export default ChatMessages;