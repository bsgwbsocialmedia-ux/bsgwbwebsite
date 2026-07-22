import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Navbar2 from '../Navbar2/Navbar2';   // ya jahan bhi hai
import Footer from '../Footer/Footer';

export default function InnerPageLayout({ children }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Navbar />
      <Navbar2 />
      <main style={{ paddingTop: '20px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}