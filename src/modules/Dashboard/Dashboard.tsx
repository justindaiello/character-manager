import React from 'react';
import axios from 'axios'

import Button, { ButtonEnums } from '@components/Button';

function Dashboard() {

  async function fetchCharacters(): Promise<void> {
    try {
      const resp = await axios.get('/api/v1/characters.json')

      console.log('[resp]', resp.data)
    } catch (err) {
      console.log('[err]', err)
    }
  }

  return (
    <Button
      variant={ButtonEnums.SECONDARY}
      onClick={fetchCharacters}
    >
      Click Me
    </Button>
  );
};

export default Dashboard;
