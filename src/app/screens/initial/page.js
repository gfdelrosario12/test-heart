"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Initial() {
  const router = useRouter();
  const [buttonPosition, setButtonPosition] = useState({ top: '60%', left: '50%' });

  const handleRouteChange = () => {
    router.push('/screens/last'); // Update the route to match the folder structure
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light position-relative">
      <h1 className="mb-4 text-center text-primary font-weight-bold">Are colors good?</h1>
      
      {/* Yes Button */}
      <button 
        onClick={handleRouteChange} 
        className="btn btn-primary btn-lg my-2 rounded-pill" // Bootstrap classes for rounded button
      >
        Yes
      </button>

      {/* No Button */}
      <button
        onClick={handleRouteChange} 
        className="btn btn-danger btn-lg my-2 rounded-pill" // Bootstrap classes for rounded button
      >
        No
      </button>
    </div>
  );
}