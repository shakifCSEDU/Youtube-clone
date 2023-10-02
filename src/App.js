import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utlis/store";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainContainer from "./components/MainContainer";
import VideoPage from "./components/VideoPage";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },{
        path:"watch",
        element:<VideoPage/>
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Head/>
        <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
