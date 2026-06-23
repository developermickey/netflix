import React from 'react'
import Login from './Login'
import Broswe from './Broswe'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/broswe",
            element: <Broswe />,
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body