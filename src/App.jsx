
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from './routers/Root';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/components/Home';
import Login from "./pages/Login/components/Login";
import Signup from './pages/Signup/components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from "./pages/Products/components/Products";
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
         {
          path:"/signup",
          element:<Signup />,
        },
        {
          path:"/products/:id",
          element:<Products/>,
        },
      ]
    },
  
  ]);

  return (
    <>
     {<RouterProvider router={router} />}
     <ToastContainer />
    </>
  )
}

export default App
