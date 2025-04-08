import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import AddBlog from './pages/AddBlog';
import Practice from './pages/Practice';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/blog" element={ <BlogList />} />
    <Route path="/add/blog" element={<AddBlog />} /> 
    <Route path="/practice" element={<Practice />} />        
  </Route>
))

function App() {
   
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
