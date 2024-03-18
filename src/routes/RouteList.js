/**
 *  @description This file contains system's route list.
 */

import { lazy } from 'react'

const CustomerPlaceOrderForm = lazy(
  () =>
    import(
      '../components/pages/customer_place_order_form/CustomerPlaceOrderForm.jsx' /* webpackChunkName: 'CustomerPlaceOrderForm'*/
    )
)

import { URL_CUSTOMER_PLACE_ORDER } from '../assets/constants/SitePath'

export const RouteList = [
  {
    path: URL_CUSTOMER_PLACE_ORDER,
    exact: true,
    component: CustomerPlaceOrderForm
  }
]
