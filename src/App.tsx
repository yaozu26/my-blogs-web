import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchThemeColorAction, fetchThemeModeAction } from '@/store/modules/main'
// import WebBg from '@/views/web-bg'
import routes from '@/router'

function App() {
  // 根据isSun值确定主题，派发事件
  const { themeMode } = useAppSelector(
    (state) => ({
      themeMode: state.main.themeMode
    }),
    shallowEqual
  )

  // 派发事件
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchThemeModeAction(themeMode))
    dispatch(fetchThemeColorAction())
  }, [])

  return (
    <div className="App">
      {/* <WebBg /> */}
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
