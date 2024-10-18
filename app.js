import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./src/Components/Body"
import Footer from "./src/Components/Footer";
import Title from "./src/Components/Title";
import Contacts from "./src/Components/Contact"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <Title />
            <Body />
            <Footer />
        </>
    );
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/contacts",
        element: <Contacts />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
