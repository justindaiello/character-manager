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
      console.log('[err]', err.response);
    }
  }

  function showToast(): void {
    toast.info('Show me the toast');
  }

  return (
    <div>
      <button onClick={fetchUser}>Fetch User</button>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
}

export default Dashboard;
