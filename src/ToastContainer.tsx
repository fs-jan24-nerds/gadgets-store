import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';

import { useColorTheme } from './hooks/useColorTheme';

import 'react-toastify/dist/ReactToastify.css';

export const ToastContainerWrapper: React.FC = () => {
  const [theme] = useColorTheme();

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme === 'dark' ? 'dark' : 'light'}
      transition={Slide}
    />
  );
};
