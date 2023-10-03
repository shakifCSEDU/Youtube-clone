import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utlis/chatSlice";
import store from "./../utlis/store";

const LiveChat = () => {
  const dispath = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // API polling ..
      dispath(
        addMessage({
          name: "Md Shakif",
          message: "Lorem ipsum dolor site am👀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="h-[600px] w-full ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <div className="w-full p-2 ml-2 border border-black">
        <form
          className="w-full p-2 ml-2 border border-black"
          onSubmit={() => {
            console.log("ON Form submit", liveMessage);
          }}
        />
        <input
          className="w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </div>
    </>
  );
};
export default LiveChat;
