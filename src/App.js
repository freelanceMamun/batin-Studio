import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import CaseStudy from './Pages/CaseStudy';
import Contact from './Pages/Contact';
import Meeting from './Pages/Meeting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/case-study',
    element: <CaseStudy />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/schedule-meeting',
    element: <Meeting />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
