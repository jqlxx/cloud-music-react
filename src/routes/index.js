// import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import BlankLayout from "../layouts/BlankLayout";
import HomeLayout from "../layouts/HomeLayout";

import RecommendComponent from '../application/Recommend'

const routes = [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/',
        component: HomeLayout,
        routes: [
          {
            path: '/',
            exact: true,
            render: () => <Redirect to={'/recommend'} />
          },
          {
            path: '/recommend',
            component: RecommendComponent,
          }
        ]
      }
    ]
  }
]

export default routes