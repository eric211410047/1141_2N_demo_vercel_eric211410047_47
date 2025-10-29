import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayoutPage_47,
  HomePage_47,
  BlogStaticPage_47,
  BlogLocalJsonPage_47,
  BlogNodePage_47,
  BookListPage_47,
  BlogSupaPage_47,
  T12_UseStateBasicsPage_47,
  T11_ErrorExamplePage_47,
  BlogLocalJsonPage2_47,
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
      {
        path: 'booklist_47',
        element: <BookListPage_47 />,
      },
      {
        path: 'supa_47',
        element: <BlogSupaPage_47 />,
      },
      {
        path: 'tutorials/t12_47',
        element: <T12_UseStateBasicsPage_47 />,
      },
      {
        path: 'tutorials/t11_47',
        element: <T11_ErrorExamplePage_47 />,
      },
      {
        path: 'localjson2_47',
        element: <BlogLocalJsonPage2_47 />,
      },
    ],
  },
]);

const App_47 = () => {
  return <RouterProvider router={router} />;
};

export default App_47;
