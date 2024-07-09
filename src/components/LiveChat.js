import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";

const LiveChat = () => {
  const dispatch = useDispatch();
  const getAllMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMesssage] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="border border-black ml-2 p-1 h-[400px] overflow-y-scroll flex flex-col-reverse">
        <div>
          {getAllMessages &&
            getAllMessages.map((message) => (
              <ChatMessage name={message.name} message={message.message} />
            ))}
        </div>
      </div>

      <form className="w-full p-1 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({name:generateRandomName() , message : liveMessage}));
          setLiveMesssage('')
        }}
      >
        <input type="text" className="border border-violet-100 p-1 w-[28rem] m-1 " value={liveMessage} onChange={(e)=>setLiveMesssage(e.target.value)} />
        <button className="p-1 m-1 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
