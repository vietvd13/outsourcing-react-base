import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@/App'

import {Provider} from 'react-redux'
import { QueryClientProvider} from '@tanstack/react-query'
import { RouterProvider} from 'react-router-dom'

import {queryClient} from '@/query/queryClient'
import {router} from '@/routes'
import {setupStore} from '@/store/setupStore'

const store = setupStore();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
