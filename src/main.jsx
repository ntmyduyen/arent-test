import PrivateRoute from '@components/PrivateRoute'
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import setupStore from './redux'

const TopPage = lazy(() => import("./pages/TopPage"))
const MyRecord = lazy(() => import("./pages/MyRecord"))
const Column = lazy(() => import("./pages/Column"))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="top-page" replace />
      },
      {
        path: 'top-page',
        element: (
          <PrivateRoute path='/top-page'>
            <Suspense fallback={null}>
              <TopPage />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'my-record',
        element: (
          <PrivateRoute path='/my-record'>
            <Suspense fallback={null}>
              <MyRecord />
            </Suspense>
          </PrivateRoute>
        )
      },
      {
        path: 'column',
        element: (
          <Suspense fallback={null}>
            <Column />
          </Suspense>
        )
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
