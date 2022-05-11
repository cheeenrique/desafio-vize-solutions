/* Imports */
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RoutesApp from './routes';

// CSS Toastify
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  );
}
