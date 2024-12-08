import axios from 'axios';
import React, { useEffect, useState } from 'react'

 const AdminPage = () => {
    const [data, setData] = useState({});  // Data to be sent in the API request
    const [token, setToken] = useState(localStorage.getItem('authToken'));  // Token from localStorage
  
    useEffect(() => {
      // Ensure token exists before making the request
      if (token) {
        axios.post('http://localhost:4000/api/user/admin', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,  // Include the token here
          },
        })
        .then(response => {
          console.log('Response:', response);  // Handle the successful response
        })
        .catch(error => {
          console.error('Error:', error);  // Handle any errors
        });
      } else {
        console.error('No token found');
      }
    }, [data, token]);  // Trigger the effect when data or token changes
  
    return (
      <div>
        <h1>Admin Page</h1>
        {/* Add your UI components or a form for interacting with the API */}
      </div>
    );
  };
  
  export default AdminPage;