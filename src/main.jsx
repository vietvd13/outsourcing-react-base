import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/App';

import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { I18nextProvider} from 'react-i18next';
import i18n from '@/locales/i18n'

import { queryClient } from '@/query/queryClient';
import { router } from '@/routes';
import { setupStore } from '@/store/setupStore';
setupStore().then(store => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n ={i18n}>
          <RouterProvider router={router}></RouterProvider>
          </I18nextProvider>
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  );
});
