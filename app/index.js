/**
 * Created by zj on 2017/8/9.
 */
import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'
import RouterMap from './router/routerMap'
render(
    <RouterMap history={hashHistory}/>,
    document.getElementById('root')
)
