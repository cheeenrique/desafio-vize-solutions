/* Imports */
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from 'pages/Login';
import Register from 'pages/Register';
import Users from 'pages/Users';
import Error from 'pages/Error';

/* Imports Material UI */
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

/* Import Context */
import { AuthProvider, AuthContext } from 'context/Auth';

export default function RoutesApp() {
  const Private = ({ children }) => {
    const { authenticated, loadingPage } = useContext(AuthContext);

    if (loadingPage) {
      return <Backdrop sx={{ color: '#461978', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loadingPage}>
              <CircularProgress color="inherit" /> 
             </Backdrop>;
    }

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Private>
              <Users />
            </Private>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </AuthProvider>
  );
}
