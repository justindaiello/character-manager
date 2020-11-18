import Head from '../src/components/Head';

import { StyledAppContainer } from '../styles/LayoutStyles';

const Home: React.FC = () => {
  return (
    <StyledAppContainer>
      <Head title='Character Manager'>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p>Hello</p>
    </StyledAppContainer>
  );
};

export default Home;
