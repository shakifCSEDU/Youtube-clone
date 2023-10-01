import { useDispatch } from "react-redux";
import { toggleMenu } from "../utlis/appSlice";
const Head = () => {


  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
  }


  return (
    <div className="grid grid-flow-col m-2 shadow-lg">
      <div className="flex col-span-1">
        <img 
        onClick={()=>toggleMenuHandler()}
        className="h-14 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
        <img className="h-16 mx-2"
          alt="youtube"
          src="data:image/png;base64,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"
        /></a>
      </div>
      <div className="col-span-10 p-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"  type="text" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
      </div>
      <div>
        <img className="h-14 col-span-1"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV3ip1gxZ9bM13uZjWbiCpiETs2AVz3GS_Q&usqp=CAU"
        />
      </div>
    </div>
  );
};
export default Head;
