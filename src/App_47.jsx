import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  HomeLayoutPage_47,
  HomePage_47,
  BlogStaticPage_47,
  BlogLocalJsonPage_47,
  BlogNodePage_47,
} from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_47 />,
    children: [
      {
        index: true,
        element: <HomePage_47 />,
      },
      {
        path: 'static_47',
        element: <BlogStaticPage_47 />,
      },
      {
        path: 'localjson_47',
        element: <BlogLocalJsonPage_47 />,
      },
      {
        path: 'node_47',
        element: <BlogNodePage_47 />,
      },
    ],
  },
]);

const App_47 = () => {
  return <RouterProvider router={router} />;
};

export default App_47;
