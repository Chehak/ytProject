import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";

const LiveChat = () => {
  const dispatch = useDispatch();
  const getAllMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMesssage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setLiveMesssage(previous => previous + emojiObject.emoji);
  };

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
      <div className=" w-full border border-black ml-2 p-1 h-[400px] overflow-y-scroll flex flex-col-reverse">
        <div>
          {getAllMessages &&
            getAllMessages.map((message) => (
              <ChatMessage name={message.name} message={message.message} />
            ))}
        </div>
      </div>

      <form
        className="ml-2 border border-black w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({ name: generateRandomName(), message: liveMessage })
          );
          setLiveMesssage("");
        }}
      >
       <div className="flex items-center  relative">
      <span 
        onClick={() => setShowEmojiPicker(!showEmojiPicker)} 
        className="absolute left-0 p-2 border border-r-black rounded-lg shadow-lg"
      >
        😀
      </span>
      {showEmojiPicker && (
        <div className="absolute left-0 top-12 z-10 w-full">
          <EmojiPicker onEmojiClick={(e)=>onEmojiClick(e)} className="w-full"/>
        </div>
      )}
      <input 
        type="text" 
        value={liveMessage}
            onChange={(e) => setLiveMesssage(e.target.value)}
        placeholder="Type something..."
        className="flex-1 p-2 pl-10 border border-gray-300 rounded"
      />
      {liveMessage && <button className="ml-2 p-2 bg-blue-500 text-white rounded">Send</button>}
    </div>
      </form>
    </>
  );
};

export default LiveChat;
