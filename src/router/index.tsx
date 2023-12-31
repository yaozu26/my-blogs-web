import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))
const Main = lazy(() => import('@/views/main'))
const Blogs = lazy(() => import('@/views/blogs'))
const Project = lazy(() => import('@/views/project'))
const Article = lazy(() => import('@/views/article'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/main" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main',
        element: <Navigate to="/main/home" />
      },
      {
        path: '/main/home',
        element: <Home />
      },
      {
        path: '/main/blogs',
        element: <Blogs />
      }
    ]
  },
  {
    path: '/article',
    element: <Article />
  },
  {
    path: '/project',
    element: <Project />
  }
]

export default routes
