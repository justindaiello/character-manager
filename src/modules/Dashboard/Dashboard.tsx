import * as React from 'react';
import axios from 'axios';
import { isEmpty } from 'ramda';
import { useSelector } from 'react-redux';

import Title from '@components/Title';

import { RootState } from '../../appReducers';

type CharacterAttributes = {
  id: string;
  name: string;
  character_class: string;
  level: number;
  race: string;
};

function Dashboard() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [characters, setCharacters] = React.useState<Array<CharacterAttributes>>([]);

  React.useEffect(() => {
    async function fetchCharacters(): Promise<void> {
      try {
        const resp = await axios.get('/api/v1/characters');

        setCharacters(resp.data);
        console.log('[resp]', resp);
      } catch (err) {
        // TODO: handle server error
        if (axios.isAxiosError(err)) {
          console.log('[err]', err.response?.data);
        } else {
          // handle unknown here
        }
      }
    }

    fetchCharacters();
  }, []);

  if (isEmpty(characters)) {
    return (
      <div>
        <Title>{isEmpty(user) ? 'Welcome' : `Welcome back, ${user!.name!}`}</Title>
        <p>No Characters</p>
      </div>
    );
  }

  return (
    <div>
      <Title>{isEmpty(user) ? 'Welcome' : `Welcome back, ${user!.name!}`}</Title>
      {characters.map(character => {
        <p key={character.id}>{character.name}</p>;
      })}
    </div>
  );
}

export default Dashboard;
