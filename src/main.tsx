import './index.css'
import { Provider } from 'react-redux'
import { store } from './services/index.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
