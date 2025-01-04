import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
const welcome = () => {
  const router = useRouter();

  useEffect(() => {
      const animationDuration = 25 * 1000; // Total duration in milliseconds

      // Function to redirect to dashboard after animation ends
      const redirectToDashboard = () => {
          setTimeout(() => {
              router.push('/dashboard'); // Navigate to dashboard page
          }, 1000); // Redirect after animationDuration milliseconds
      };

      redirectToDashboard(); // Start redirection timer on component mount

      return () => {
          // Clean up any timers or resources if needed
      };
  }, [router]);


    
};

export default welcome;
