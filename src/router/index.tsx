import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))
const Project = lazy(() => import('@/views/project'))
const Blogs = lazy(() => import('@/views/blogs'))

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
    path: '/project',
    element: <Project />
  },
  {
    path: '/blogs',
    element: <Blogs />
  }
]

export default routes
