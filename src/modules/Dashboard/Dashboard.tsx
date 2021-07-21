import * as React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Dashboard() {
  async function fetchUser() {
    let token = localStorage.getItem('token');
    try {
      const resp = await axios.get('/api/v1/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('[resp]', resp.data);
    } catch (err) {
      let { message } = err.response.data;
      console.log('[err]', message);
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
  }

  function showToast(): void {
    toast.info('Show me the toast');
  }

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
      <button onClick={fetchUser}>Fetch User</button>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
}

export default Dashboard;
