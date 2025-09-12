import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './components/Layout.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Github, { gitFollowers } from './components/Github.jsx';
import User from './components/User.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route, // ✅ Missing before
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/github" loader={gitFollowers} element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
