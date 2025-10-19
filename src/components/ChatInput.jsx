import React, { useState } from 'react';

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (inputText.trim() === '') return; // Prevent sending empty messages

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'chatbot',
        id: crypto.randomUUID(),
      },
    ]);

    setInputText(''); // Clear input field
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="flex items-center justify-center mb-4">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-400 p-2.5 flex-grow"
        placeholder='Send a message to chatbot'
        value={inputText}
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
      />
      <button 
        className="bg-blue-400 hover:bg-blue-500 hover:opacity-90 text-white ml-2 py-2 px-4 rounded-lg cursor-pointer transition duration-200 ease-in-out"
        onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatInput;
