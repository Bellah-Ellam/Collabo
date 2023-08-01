import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ flex: '1', paddingBottom: '60px' }}>
        <Outlet />
      </div>
      
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default Layout;
