/**
 *  @description This file contains system's route list. 
 */

import { lazy } from "react"

const SelectMaterial = lazy(() => import("../components/SelectMaterial.jsx" /* webpackChunkName: 'SelectMaterial'*/))

import {
    URL_SELECT_MATERIAL,
} from "../assets/constants/SitePath"

export const RouteList = [
    {
        path: URL_SELECT_MATERIAL,
        exact: true,
        component: SelectMaterial,
    },
]
