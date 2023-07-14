import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input, message } from 'antd'
import type { FormInstance } from 'antd/es/form'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

import { LoginWrapper } from './style'
import { IAccount } from '@/types'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { changeAutoLoginAction, fetchLoginAction } from '@/store/modules/login/login'
import { registerUserRequest } from '@/service/module/login'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [messageApi, contextHolder] = message.useMessage()

  // 从store中获取数据
  const { isAutoLogin } = useAppSelector(
    (state) => ({
      isAutoLogin: state.login.isAutoLogin
    }),
    shallowEqual
  )

  const formRef = useRef<FormInstance>(null)
  const dispatch = useAppDispatch()

  // 自动登录的逻辑事件
  function handleChangeAutoLoginClick(e: CheckboxChangeEvent) {
    const isChecked = e.target.checked
    dispatch(changeAutoLoginAction(isChecked))
  }

  // 处理提交表单且数据验证成功后回调事件
  function handleOnFinish() {
    // 1、拿到表单的用户信息
    const account: IAccount = formRef.current?.getFieldsValue()

    // 2、派发事件，
    if (isLogin) {
      dispatch(fetchLoginAction(account))
    } else {
      registerUserRequest(account).then((res: any) => {
        if (res.code === 0) {
          messageApi.open({
            type: 'success',
            content: '用户创建成功'
          })
        } else {
          messageApi.open({
            type: 'error',
            content: res.message
          })
        }
      })
    }
  }

  // 用户登录和注册用户的事件
  function handleSwitchRegisterLogin() {
    setIsLogin(!isLogin)
  }

  return (
    <LoginWrapper>
      {contextHolder}

      <div className="panel">
        <h2 className="title">{!isLogin ? '注册用户' : '用户登录'}</h2>

        <Form
          ref={formRef}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          size="large"
          onFinish={handleOnFinish}
        >
          <Form.Item
            label="用户名"
            name="name"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input />
          </Form.Item>

          {isLogin && (
            <div className="control">
              <Checkbox checked={isAutoLogin} onChange={(e) => handleChangeAutoLoginClick(e)}>
                记住密码
              </Checkbox>
            </div>
          )}

          <Form.Item wrapperCol={{ span: 24 }} style={{ margin: 0 }}>
            <Button type="primary" htmlType="submit">
              {isLogin ? '立即登录' : '立即注册'}
            </Button>
          </Form.Item>

          <div className="switch">
            <Link to="/home">返回</Link>
            <div className="register" onClick={handleSwitchRegisterLogin}>
              {isLogin ? '注册用户' : '用户登录'}
            </div>
          </div>
        </Form>
      </div>
    </LoginWrapper>
  )
}

export default memo(Login)
