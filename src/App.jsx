import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/index';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
    // {
    //   path:'/seatbooking',
    //   element:<SeatBooking/>
    // }
  ]);

  return (
    <>
    <div>
    <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
