import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './main.css';
import CategoryIndex from './Indexes/CategoryIndex';
import ItemsIndex from './Indexes/ItemsIndex';
import HomeIndex from './Indexes/HomeIndex';
import PreviewIndex from './Indexes/PreviewIndex';
import PublishIndex from './Indexes/PublishIndex';
import './i18n';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeIndex />,
  },
  {
    path: "/food",
    element: <CategoryIndex category='food' key='food'/>,
  },
  {
    path: "/drinks",
    element: <CategoryIndex category='drinks' key='drinks'/>,
  },
  {
    path: "categories/:id",
    element: <ItemsIndex />,
  },
  {
    path: "/preview",
    element: <PreviewIndex />,
  },
  {
    path: "/publish",
    element: <PublishIndex />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);