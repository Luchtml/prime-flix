import React from 'react';
import RoutesApp from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={4000} />
      <RoutesApp />
    </div>
  );
};

export default App;
