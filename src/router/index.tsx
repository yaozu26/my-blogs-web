import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/main/c-page/home'))
const Main = lazy(() => import('@/views/main'))
const Blogs = lazy(() => import('@/views/main/c-page/blogs'))
const Project = lazy(() => import('@/views/project'))
const Article = lazy(() => import('@/views/article'))
const Write = lazy(() => import('@/views/write'))
// 后台管理
const User = lazy(() => import('@/views/user'))
const Role = lazy(() => import('@/views/user/c-pages/role'))
const Product = lazy(() => import('@/views/user/c-pages/product'))

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
  },
  {
    path: '/write',
    element: <Write />
  },
  {
    path: '/user',
    element: <User />,
    children: [
      {
        path: '/user',
        element: <Navigate to="/user/role" />
      },
      {
        path: '/user/role',
        element: <Role />
      },
      {
        path: '/user/product',
        element: <Product />
      }
    ]
  }
]

export default routes
