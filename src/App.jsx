
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from './routers/Root';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/components/Home';
import Login from "./pages/Login/components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<NotFound />,
      children:[
        {
          path:"/",
          element:<Home />,
        },
        {
          path:"/login",
          element:<Login />,
        },
      ]
    },
  
  ]);

  return (
    <>
     {<RouterProvider router={router} />}
    </>
  )
}

export default App
