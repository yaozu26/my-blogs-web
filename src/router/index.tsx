import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/main/c-page/home'))
const Blogs = lazy(() => import('@/views/main/c-page/blogs'))
const Article = lazy(() => import('@/views/article'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/blogs',
    element: <Blogs />
  },
  {
    path: '/article',
    element: <Article />
  }
]

export default routes
