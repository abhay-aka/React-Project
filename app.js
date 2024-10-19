import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./src/Components/Body"
import Footer from "./src/Components/Footer";
import Contacts from "./src/Components/Contact"
import PhotoGallery from "./src/Components/PhotoGallery"
import CommentSection from "./src/Components/CommentSection";
import Calculator from "./src/Components/Calculator";
import TodoList from "./src/Components/TodoList";
import Navbar from "./src/Components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {
    return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </div>
    );
}
const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
            path: "/",
            element: <Body />
        },
        {
          path: "gallery",
          element: <PhotoGallery />
        },
        {
          path: "calc",
          element: <Calculator />
        },
        {
          path: "todo",
          element: <TodoList />
        },
        {
          path: "comments",
          element: <CommentSection />
        }
    
        
      ]
    }
  ]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
