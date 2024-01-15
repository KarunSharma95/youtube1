import './App.css';
import Header from "./Component/Header";
import Body from "./Component/Body";
import Store from "../src/utils/Store";
import {Provider} from "react-redux"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Container from './Component/Container';
import WatchPage from './Component/WatchPage';

function App() {
const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Container/>
    },
    {
      path:"watch",
      element :<WatchPage/>
    }
  ]
}])

  return (
    <div className="App">
    <Provider store={Store}>
     <Header/>
     <RouterProvider router={appRouter}/>
    </Provider>
    </div>
  );
}

export default App;
