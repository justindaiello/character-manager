import * as React from 'react';
import axios from 'axios';
import { isEmpty } from 'ramda';
import { toast } from 'react-toastify';
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
  const { user, token } = useSelector((state: RootState) => state.auth);
  const [characters, setCharacters] = React.useState<Array<CharacterAttributes>>([]);

  async function deleteCharacter(id: string, name: string): Promise<void> {
    try {
      const resp = await axios.delete(`/api/v1/characters/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        let filteredChars = characters.filter(char => char.id !== id);
        setCharacters(filteredChars);

        toast.info(`${name} has been deleted.`);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data);
      }
    }
  }

  React.useEffect(() => {
    async function fetchCharacters(): Promise<void> {
      try {
        const resp = await axios.get('/api/v1/characters');

        setCharacters(resp.data);
      } catch (err) {
        // TODO: handle server error
        if (axios.isAxiosError(err)) {
          toast.error(err.response?.data);
        } else {
          toast.error('Uh oh - something went wrong');
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
      {characters.map(({ id, name }) => (
        <div key={id}>
          <p>{name}</p>
          <button onClick={() => deleteCharacter(id, name)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
