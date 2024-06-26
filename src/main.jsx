import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QuioscoProvider } from './context/QuioscoProvider'
import router from './router'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
        <QuioscoProvider>
            <RouterProvider router={router} />
        </QuioscoProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
