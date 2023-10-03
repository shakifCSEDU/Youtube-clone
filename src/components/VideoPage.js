import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utlis/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./ComentContainer";
import LiveChat from "./LiveChat";

const VideoPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
    <div className="px-5 flex w-full">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="w-full">
        <LiveChat/>
      </div>
    </div>
    <CommentContainer/>
    </div>
  );
};
export default VideoPage;
