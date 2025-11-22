import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router";
import App from "./App";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";


const root=createRoot(document.querySelector('#root'))

let router = createBrowserRouter([
  {
    path: "/",
    // element:<div>Hello World!!!</div>
     element:<App />,
     errorElement:<Error />,
     children:[
         {
            path: "/",
            element:<Home />
        },
        {
            path: "/contact",
            element:<Contact />
        },
        {
            path: "/country",
            element:<CountryDetail />
        },
     ]
  },
  
]);

// root.render(<App />)
root.render(<RouterProvider router={router} />)