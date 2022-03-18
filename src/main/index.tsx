import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/presentation/components/router/router'
import { makeLogin } from './factories/pages/login/login-factory'
import '@/presentation/styles/global.scss'

ReactDOM.render(
  <Router makeLogin={makeLogin} />,
  document.getElementById('main')
)
