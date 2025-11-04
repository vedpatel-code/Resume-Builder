import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

// Pages
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import Preview from './pages/Preview';
import Login from './pages/Login';
import ViewTemplate from './pages/ViewTemplate';

// Configs & Redux
import api from './config/api';
import { login, setLoading } from './app/features/authSlice';

const App = () => {
  const dispatch = useDispatch();

  const getUserData = async () => {
    const token = localStorage.getItem('token');
    try {
      if (token) {
        const { data } = await api.get('/api/users/data', {
          headers: { Authorization: token },
        });
        if (data.user) {
          dispatch(login({ token, user: data.user }));
        }
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />

        {/* Authenticated app routes */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="builder/:resumeId" element={<ResumeBuilder />} />
        </Route>

        {/* Public resume preview */}
        <Route path="/view/:resumeId" element={<Preview />} />

        {/* Optional login route (if needed later) */}
        <Route path="/login" element={<Login />} />
        <Route path='/view-template' element={<ViewTemplate />} />

      </Routes>
    </>
  );
};

export default App;
