import React, { useState } from 'react';

export default function Firstperson({setMess1,messFrom2}) {
  const [messes, setMesses] = useState('');

  const handleMessageChange = (e) => {
    setMesses(e.target.value);
  };

  const sendMessage = () => {
    setMess1(messes)
    console.log('Message sent:', messes);
  };

  return (
    <div>
    <div>
        <p>
            {messFrom2}
        </p>
    </div>
      <input
        placeholder='Nhập tin nhắn'
        value={messes}
        onChange={handleMessageChange}
      />
      <button onClick={sendMessage}>Gửi</button>
    </div>
  );
}