import * as React from 'react';
import axios from 'axios'

function Dashboard() {

  async function fetchUser() {
    let token = localStorage.getItem("token")
    try {
      const resp = await axios.get('/api/v1/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      console.log('[resp]', resp.data)
    } catch (err) {
      let { message } = err.response.data
      console.log('[err]', message)
    }
  }

  function handleLogout() {
    localStorage.removeItem('token')
  }

  return (
    <div>
      <button onClick={handleLogout}>
        Log Out
      </button>
      <button onClick={fetchUser}>
        Fetch User
      </button>
    </div>
  );
};

export default Dashboard;
