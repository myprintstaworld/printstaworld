import React from 'react'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Root from '../Root'
import Home from '../Components/Home/Home'



function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root/>}>
                <Route path='' element={<Home/>}/>
            </Route>
        )
    )
  return (
<>
<RouterProvider router={router}/>
</>    
  )
}

export  {Router}