import Head from '@components/Head';
import Sidebar from '@modules/Sidebar';
import Dashboard from '@modules/Dashboard';
import { StyledAppContainer } from '@styles/LayoutStyles';

function Home() {
  return (
    <StyledAppContainer>
      <Head title='Character Manager'>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
      <Dashboard />
    </StyledAppContainer>
  );
}

export default Home;
