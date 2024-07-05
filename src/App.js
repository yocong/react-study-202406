import React from 'react';
import Home from './components/RouteExample/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';
import Events, { loader as eventListLoader } from './components/RouteExample/pages/Events';
import EventDetail, { loader as eventDetailLoader, action as deleteAction } from './components/RouteExample/pages/EventDetail';
import EventLayout from './components/RouteExample/layout/EventLayout';
import NewEvent from './components/RouteExample/pages/NewEvent';
import EditPage from './components/RouteExample/pages/EditPage';
import { action as manipulateAction } from './components/RouteExample/components/EventForm'

// 라우터 설정
const router = createBrowserRouter([

  // path: '' -> index: true로 변경가능
  // :prodId -> ':' 붙으면 변동값
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [ // 중첩 라우팅
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          { 
            index: true,
            element: <Events/>,
            // loader: eventListLoader, // Events의 loader: 전체조회
          },
          { 
            path: ':eventId',
            loader: eventDetailLoader, // EventDetail의 loader: 단일조회
            // element: <EventDetail />,
            // loader가 children에게 직접적으로 연결되지 않아
            // EventDetail에서 loader를 사용하지 못하고 있음
            // 해결법 -> loader에게 id부여 후 EventDetail에서 loader 재설정
            id: 'event-detail',
            children: [
              { 
                index: true, 
                element: <EventDetail />,
                action: deleteAction
               },
              { 
                path: 'edit',
                element: <EditPage />,
                action: manipulateAction
              },
            ]
          },
          {
            path: 'new',
            element: <NewEvent />,
            // 서버에 갱신데이터요청을 보낼 때 트리거
            action: manipulateAction
          },
        ]
      }
    ]
  },
]);

const App = () => {
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;
