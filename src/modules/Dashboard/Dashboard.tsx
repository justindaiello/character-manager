import React from 'react';
import axios from 'axios'

const Dashboard: React.FC = () => {

  async function fetchUsers(): Promise<void> {
    try {
      const resp = await axios.get('/api/v1/users.json')

      console.log('[resp]', resp.data)
    } catch (err) {
      console.log('[err]', err)
    }
  }

  return (
    <div>
      <button onClick={fetchUsers}>Dashboard</button>
    </div>
  );
};

export default Dashboard;
