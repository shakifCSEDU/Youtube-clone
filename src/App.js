import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utlis/store";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },{
        element:"watch",
        element:<WatchPage/>
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
