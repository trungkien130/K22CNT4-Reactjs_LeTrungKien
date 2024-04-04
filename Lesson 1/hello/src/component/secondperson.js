import React, { useState } from 'react';

export default function Secondperson({messFrom1,setMess2}) {
  const [messes, setMesses] = useState('');

  const handleMessageChange = (e) => {
    setMesses(e.target.value);
  };
  const sendMessage = () => {
    setMess2(messes)
  };
console.log(messFrom1)
  return (
    <div>
      <div>
        <p>{messFrom1}</p>
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