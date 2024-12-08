import axios from 'axios';
import React, { useEffect, useState } from 'react'

 const AdminPage = () => {
    const [data] = useState({});  
    const [token] = useState(localStorage.getItem('authToken')); 
    useEffect(() => {
      
      if (token) {
        axios.post('http://localhost:4000/api/user/admin', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          },
        })
        .then(response => {
          console.log('Response:', response); 
        })
        .catch(error => {
          console.error('Error:', error); 
        });
      } else {
        console.error('No token found');
      }
    }, [data, token]);  
    return (
      <div>
        <h1>Admin Page</h1>
       
      </div>
    );
  };
  
  export default AdminPage;